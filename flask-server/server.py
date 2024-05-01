from flask import Flask, jsonify
from flask_cors import CORS
from routes import fetch_company_details, fetch_historical_data, fetch_latest_quote
import logging

app = Flask(__name__)

# Enable CORS for all domains and all routes
CORS(app)

# Setup logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/')
def hello_world():
    return 'Hello, from Flask!'

@app.route('/company/<ticker>')
def company_details(ticker):
    try:
        return fetch_company_details(ticker)
    except Exception as e:
        logging.error(f"Failed to fetch company details for {ticker}: {str(e)}")
        return jsonify({'error': 'Failed to fetch company details', 'details': str(e)}), 500

@app.route('/history/<ticker>')
def history(ticker):
    try:
        return fetch_historical_data(ticker)
    except Exception as e:
        logging.error(f"Failed to fetch historical data for {ticker}: {str(e)}")
        return jsonify({'error': 'Failed to fetch historical data', 'details': str(e)}), 500

@app.route('/quote/<ticker>')
def quote(ticker):
    try:
        return fetch_latest_quote(ticker)
    except Exception as e:
        logging.error(f"Failed to fetch the latest quote for {ticker}: {str(e)}")
        return jsonify({'error': 'Failed to fetch the latest quote', 'details': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
