from flask import request, jsonify
from models import User, db
import hashlib
import hmac
import os
import yfinance as yf
import requests

CLERK_API_URL = "https://api.clerk.dev/v1"
CLERK_API_KEY = os.getenv("CLERK_API_KEY")

def clerk_webhook():
    payload = request.get_json()
    event_type = payload['type']

    if event_type == 'user.created' or event_type == 'user.updated':
        user_data = payload['data']
        user_id = user_data['id']
        name = user_data['first_name'] + ' ' + user_data['last_name']
        email = user_data['email_addresses'][0]['email_address']
        
        user = User.query.get(user_id)
        if user:
            # Update existing user
            user.name = name
            user.email = email
        else:
            # Create new user
            user = User(user_id=user_id, name=name, email=email)
            db.session.add(user)

        db.session.commit()

    elif event_type == 'user.deleted':
        user_id = payload['data']['id']
        
        # Delete user from the database
        user = User.query.get(user_id)
        if user:
            db.session.delete(user)
            db.session.commit()

    return jsonify({'status': 'success'}), 200


def fetch_clerk_users():
    headers = {
        "Authorization": f"Bearer {CLERK_API_KEY}",
        "Content-Type": "application/json"
    }
    response = requests.get(f"{CLERK_API_URL}/users", headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None
    
def get_user_balance(user_id):
    user = User.query.get(user_id)
    if user is not None:
        return jsonify({'balance': float(user.balance), 'status': 'success'}), 200
    else:
        return jsonify({'error': 'User not found'}), 404


def fetch_company_details(ticker):
    company = yf.Ticker(ticker)
    info = company.info
    return jsonify(info)


def fetch_historical_data(ticker, period="1y", interval="1d"):
    ticker_obj = yf.Ticker(ticker)
    try:
        data = ticker_obj.history(period=period, interval=interval)
        if data.empty:
            return jsonify({"error": "No historical data found."}), 404
        data.reset_index(inplace=True)
        data["Date"] = data["Date"].dt.strftime("%Y-%m-%d")
        data_dict = data.to_dict(orient="records")
        return jsonify(data_dict), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def fetch_latest_quote(ticker):
    ticker = yf.Ticker(ticker)
    try:
        data = ticker.history(period="1d")
        if data.empty:
            return jsonify({"error": "No latest quote data found."}), 404
        last_valid_index = data["Close"].last_valid_index()
        if last_valid_index is not None:
            latest_data = data.loc[last_valid_index].to_dict()
            latest_data["Date"] = last_valid_index.strftime("%Y-%m-%d")
            return jsonify(latest_data), 200
        return jsonify({"error": "No valid data found for the latest quote."}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
