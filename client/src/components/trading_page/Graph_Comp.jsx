import React, { useEffect, useRef, memo } from 'react';

function Graph_Comp() {
  const container = useRef();
    
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "AAPL",
      "width": "100%",
      "height": "100vh",
      "locale": "en",
      "dateRange": "1D",
      "colorTheme": "light",
      "trendLineColor": "rgba(41, 98, 255, 1)",
      "underLineColor": "rgba(41, 98, 255, 0.3)",
      "isTransparent": false,
      "autosize": true,
      "largeChartUrl": ""
    });
    container.current.innerHTML = '';
    container.current.appendChild(script);
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(Graph_Comp);
