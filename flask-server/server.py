from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_cors import cross_origin
from routes import fetch_company_details, fetch_historical_data, fetch_latest_quote
import logging
import requests



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

@app.route('/search', methods=['GET'])
def proxy_search():
    query = request.args.get('q')
    if not query:
        return jsonify({'error': 'Query parameter is missing'}), 400
    response = requests.get(f'https://query1.finance.yahoo.com/v1/finance/search?q={query}')
    return jsonify(response.json())

@app.route('/history/<ticker>')
def history(ticker):
    # Retrieve period and interval from query parameters with default values
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
    app.run(debug=True)
