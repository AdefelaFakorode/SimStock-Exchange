import yfinance as yf
import os
import requests
from flask import jsonify

CLERK_API_URL = "https://api.clerk.dev/v1"
CLERK_API_KEY = os.getenv("CLERK_API_KEY")

def fetch_clerk_users():
    """Fetch all user details from Clerk."""
    headers = {
        "Authorization": f"Bearer {CLERK_API_KEY}",
        "Content-Type": "application/json"
    }
    response = requests.get(f"{CLERK_API_URL}/users", headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        return None

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
