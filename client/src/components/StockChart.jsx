import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

function StockChart({ ticker }) {
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState('1D');  // State to hold the selected interval
  const [period, setPeriod] = useState('1y');  // State to hold the selected period

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/history/${ticker}?interval=${interval}&period=${period}`);
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [ticker, interval, period]);  // Depend on period as well

  const handleIntervalChange = (newInterval, newPeriod) => {
    setInterval(newInterval);
    setPeriod(newPeriod);  // Set period when interval changes
  };

  return (
    <div>
      <div className='flex space-x-2 mb-4'>
        <button className={`bg-blue-500 text-white font-bold py-1 px-2 rounded ${interval === '1D' ? 'ring-2 ring-blue-300 bg-blue-800' : ''}`} onClick={() => handleIntervalChange('1D', '1y')}>1D</button>
        <button className={`bg-blue-500 text-white font-bold py-1 px-2 rounded ${interval === '1wk' ? 'ring-2 ring-blue-300 bg-blue-800' : ''}`} onClick={() => handleIntervalChange('1wk', '1y')}>1W</button>
        <button className={`bg-blue-500 text-white font-bold py-1 px-2 rounded ${interval === '1mo' ? 'ring-2 ring-blue-300 bg-blue-800' : ''}`} onClick={() => handleIntervalChange('1mo', '1y')}>1M</button>
        <button className={`bg-blue-500 text-white font-bold py-1 px-2 rounded ${interval === '3mo' ? 'ring-2 ring-blue-300 bg-blue-800' : ''}`} onClick={() => handleIntervalChange('3mo', '3y')}>3M</button>
      </div>
      <div style={{ overflow: 'auto' }}>
        <LineChart width={920} height={620} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Close" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
}

export default StockChart;
