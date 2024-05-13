# SimStock-Exchange

## Table of Contents
- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Design](#design)
- [Screenshots](#screenshots)
- [Development Setup](#development-setup)

## Project Description
Our project offers a web-based stock market simulator designed for beginners to practice trading strategies risk-free using virtual funds. It features a realistic trading environment with fluctuating stock values and news updates, enabling users to buy and sell stocks without financial risk. This intuitive and user-friendly platform serves as an educational tool, helping users understand stock market dynamics and make informed decisions. Additionally, it prepares users for real-world trading by highlighting the differences between virtual and actual trading risks.

## Tech Stack
- **Frontend Development:** React to build a user interface, styled with Tailwind-CSS.
- **Backend Development:** Python and flask for server-side operations.
- **Database:** PostgreSQL for the database.
- **User Auth:** Utilized Clerk for Authentication and Authorization.
- **API:** News API, Yfinance API and textBlob API.

## Features
1. **User Authentication:** Implement secure login and signup mechanisms.
2. **Buy and Sell Trading:** Enable users to execute buy and sell orders on virtual stocks, mirroring real trading.
3. **Stock Chart:** Display fluctuating stock prices over specific time periods to help users analyze market trends.
4. **Stock Details and Search:**  Users can search for a stock by ticker symbol or name, retrieving and displaying key information like price, market cap, and historical performance.
5. **News Feed:** Integrate a news feed featuring the latest stock market news. With sentiment analysis provided by the TextBlob API to gauge market sentiment.
6. **Open and Closed Trades:** Allow users to view their active (open) and completed (closed) trades, offering insights into their trading performance. Also their lifetime gains and losses.

## Design
### Contianer Diagram
<img width="733" alt="Screenshot 2024-05-09 at 12 59 34 AM" src="https://github.com/jawadrada/SimStock-Exchange/assets/103535961/53240b61-972d-4734-9fce-86b038896f43">

### Use Case Diagram
<img width="741" alt="Screenshot 2024-05-09 at 1 04 43 AM" src="https://github.com/jawadrada/SimStock-Exchange/assets/103535961/ff8873da-2f35-4353-81a0-c3fae3b6f183">

## Screenshots
### Landing Page
<img width="1440" alt="Screenshot 2024-05-09 at 1 34 55 AM" src="https://github.com/jawadrada/SimStock-Exchange/assets/103535961/9789d981-8b78-4e48-b0f6-673f6777355a">

### Trading Page
<img width="779" alt="Screenshot 2024-05-13 at 7 44 01 PM" src="https://github.com/jawadrada/SimStock-Exchange/assets/103535961/63934354-10d4-492e-a10d-437ac4ac7a29">

### News Feed
<img width="1440" alt="Screenshot 2024-05-09 at 1 34 46 AM" src="https://github.com/jawadrada/SimStock-Exchange/assets/103535961/744270a2-69a1-473b-86d6-1e69f6b441e6">

### Past Trades

## Development Setup
Before you start working on the project, you'll need to set up your development environment. This includes installing necessary software, setting up the database, and preparing your local development server.

#### Prerequisites
- Git
- Node.js and npm
- Python 3
- PostgreSQL
- An IDE or code editor of your choice (e.g., Visual Studio Code)

#### Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/jawadrada/SimStock-Exchange.git
cd SimStock-Exchange
```

#### Frontend Setup
1. **Install Node.js Dependencies:**
   Navigate to the frontend directory and install the dependencies.

```bash
cd client
npm install
```

2. **Environment Variables:**
   Create a `.env` file in the client directory to store your environment variables, such as API keys.

```bash
touch .env
# Add necessary API keys and endpoints
```

3. **Run the Development Server:**
   Start the React development server.

```bash
npm start
```

This command will start the frontend development server, typically accessible at `http://localhost:3000`.

#### Backend Setup
1. **Python Environment:**
   Set up a Python virtual environment and activate it.

```bash
cd ../server
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

2. **Install Dependencies:**
   Install Python packages required for the backend.

```bash
pip install -r requirements.txt
```

3. **Database Setup:**
   Create a PostgreSQL database and add the database credentials to a `.env` file in the server directory.

```bash
# Create a PostgreSQL database
# Update .env file with DATABASE_URL
```

4. **Run the Backend Server:**
   Start the Flask server.

```bash
python app.py
```
