import React, { useEffect } from 'react';

function TradingViewWidget() {
  useEffect(() => {
    // Check if the script is already added
    const existingScript = document.getElementById('tradingview-widget-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'tradingview-widget-script';  // Add an ID to the script
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "light",
  "dateRange": "12M",
  "exchange": "US",
  "showChart": false,
  "locale": "en",
  "width": "100%",
  "height": "100%",
  "largeChartUrl": "",
  "isTransparent": false,
  "showSymbolLogo": false,
  "showFloatingTooltip": false
      });

      document.getElementById("tradingview-widget-container").appendChild(script);
    }
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div className="tradingview-widget-container" id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default TradingViewWidget;
