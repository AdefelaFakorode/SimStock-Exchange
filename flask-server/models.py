from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ENUM

db = SQLAlchemy()

sentiment_type = ENUM('positive', 'negative', 'neutral', name='sentiment_type', create_type=False)
status_type = ENUM('open', 'closed', name='status_type', create_type=False)
transaction_type = ENUM('buy', 'sell', name='transaction_type', create_type=False)

class User(db.Model):
    user_id = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    balance = db.Column(db.Numeric(10, 2), default=0.00)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

class Transaction(db.Model):
    transaction_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey('user.user_id'), nullable=False)
    stock_ticker = db.Column(db.String, nullable=False)
    transaction_type = db.Column(transaction_type, nullable=False)
    status = db.Column(status_type, nullable=False)
    price_per_share = db.Column(db.Numeric(10, 2))
    quantity = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

class UserStocks(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey('user.user_id'), nullable=False)
    stock_ticker = db.Column(db.String, nullable=False)
    last_accessed_price = db.Column(db.Numeric(10, 2))
    last_accessed_timestamp = db.Column(db.DateTime, server_default=db.func.now())

class NewsFeed(db.Model):
    news_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    sentiment = db.Column(sentiment_type, nullable=False)
    stock_ticker = db.Column(db.String, db.ForeignKey('user_stocks.stock_ticker'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())
