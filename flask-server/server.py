from flask import Flask
from routes import fetch_company_details, fetch_historical_data, fetch_latest_quote

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, from Flask!'

@app.route('/company/<ticker>')
def company_details(ticker):
    return fetch_company_details(ticker)

@app.route('/history/<ticker>')
def history(ticker):
    return fetch_historical_data(ticker)

@app.route('/quote/<ticker>')
def quote(ticker):
    return fetch_latest_quote(ticker)

if __name__ == "__main__":
    app.run(debug=True)
