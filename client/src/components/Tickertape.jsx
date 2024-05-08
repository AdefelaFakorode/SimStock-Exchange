import React, { useEffect } from 'react';

const TickerTape = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "description": "",
            "proName": "NASDAQ:TSLA"
          },
          {
            "description": "",
            "proName": "NASDAQ:AAPL"
          },
          {
            "description": "",
            "proName": "NASDAQ:NVDA"
          },
          {
            "description": "",
            "proName": "NASDAQ:AMD"
          },
          {
            "description": "",
            "proName": "NASDAQ:META"
          },
          {
            "description": "",
            "proName": "NASDAQ:AMZN"
          },
          {
            "description": "",
            "proName": "NASDAQ:MSFT"
          },
          {
            "description": "",
            "proName": "NASDAQ:NFLX"
          },
          {
            "description": "",
            "proName": "NASDAQ:GOOG"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    const container = document.querySelector('.tradingview-widget-container__widget');
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default TickerTape;
