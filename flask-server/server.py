from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import logging
import requests
import os
from dotenv import load_dotenv
from models import db, User, Transaction, UserStocks, NewsFeed
from routes import fetch_company_details, fetch_historical_data, fetch_latest_quote, fetch_clerk_users

load_dotenv('.env.local')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, resources={r"/api/*": {"origins": "*"}})
logging.basicConfig(level=logging.DEBUG)
db.init_app(app)

@app.route('/api/')
def hello_world():
    return 'Hello, from Flask!'

@app.route('/api/users')
def get_users():
    users_details = fetch_clerk_users()
    if users_details:
        return jsonify(users_details)
    else:
        return jsonify({"error": "Failed to fetch user details"}), 404

@app.route('/api/company/<ticker>')
def company_details_view(ticker):
    return company_details(ticker)

@app.route('/api/search', methods=['GET'])
def proxy_search():
    query = request.args.get('q')
    if not query:
        return jsonify({'error': 'Query parameter is missing'}), 400
    response = requests.get(f'https://query1.finance.yahoo.com/v1/finance/search?q={query}')
    return jsonify(response.json())

@app.route('/api/history/<ticker>')
def history_view(ticker):
    period = request.args.get('period', '1y')
    interval = request.args.get('interval', '1d')
    return fetch_historical_data(ticker, period, interval)

@app.route('/api/quote/<ticker>')
def quote_view(ticker):
    return fetch_latest_quote(ticker)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
