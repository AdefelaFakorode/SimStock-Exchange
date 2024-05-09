from flask import Flask, jsonify, request, make_response
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
import logging
import requests
import os
from dotenv import load_dotenv
from decimal import Decimal


load_dotenv('.env.local')

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
logging.basicConfig(level=logging.DEBUG)

from models import db, User, Transaction, UserStocks, NewsFeed
db.init_app(app)

from routes import fetch_company_details, fetch_historical_data, fetch_latest_quote, fetch_clerk_users, clerk_webhook, get_user_balance

def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response

def _corsify_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/')
def hello_world():
    return 'Hello, from Flask!'

@app.route('/webhooks/clerk/', methods=['POST'])
def handle_clerk_webhook():
    return clerk_webhook()

@app.route('/users')
def get_users():
    users_details = fetch_clerk_users()
    if users_details:
        return jsonify(users_details)
    else:
        return jsonify({"error": "Failed to fetch user details"}), 404
    
@app.route('/get_balance/<user_id>', methods=['GET'])
def get_balance(user_id):
    return get_user_balance(user_id)

@app.route('/buy_currency', methods=['POST', 'OPTIONS'])
@cross_origin()
def buy_currency():
    data = request.get_json()
    user_id = data.get('user_id')
    amount = Decimal(data.get('amount', 0))  # Convert float to Decimal right at input

    if amount <= 0:
        return jsonify({'error': 'Invalid amount specified'}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404

    # Here we are now adding Decimal to Decimal
    user.balance += amount
    db.session.commit()

    return jsonify({'message': 'Currency added successfully', 'new_balance': float(user.balance)}), 200


@app.route('/company/<ticker>')
def company_details(ticker):
    try:
        return fetch_company_details(ticker)
    except Exception as e:
        logging.error(f"Failed to fetch company details for {ticker}: {str(e)}")
        return jsonify({'error': 'Failed to fetch company details', 'details': str(e)}), 500

@app.route('/search', methods=['GET'])
def proxy_search():
    query = request.args.get('q')
    if not query:
        return jsonify({'error': 'Query parameter is missing'}), 400
    response = requests.get(f'https://query1.finance.yahoo.com/v1/finance/search?q={query}')
    return jsonify(response.json())

@app.route('/history/<ticker>')
def history(ticker):
    period = request.args.get('period', '1y')
    interval = request.args.get('interval', '1d')
    try:
        return fetch_historical_data(ticker, period, interval)
    except Exception as e:
        print(f"Failed to fetch historical data for {ticker}: {str(e)}")
        return jsonify({'error': 'Failed to fetch historical data', 'details': str(e)}), 500

@app.route('/quote/<ticker>')
def quote(ticker):
    try:
        return fetch_latest_quote(ticker)
    except Exception as e:
        logging.error(f"Failed to fetch the latest quote for {ticker}: {str(e)}")
        return jsonify({'error': 'Failed to fetch the latest quote', 'details': str(e)}), 500

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(port=5000,debug=True)