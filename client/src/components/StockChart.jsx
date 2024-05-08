import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

function StockChart({ ticker }) {
  const [data, setData] = useState([]);
  const [interval, setInterval] = useState('1D');  // State to hold the selected interval
  const [period, setPeriod] = useState('1y');  // State to hold the selected period

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/history/${ticker}?interval=${interval}&period=${period}`);
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
    <div className="bg-dark-blue text-black p-4">
      <div className='flex space-x-2 justify-end mb-4 space-x-5'>
        <button className={`bg-blue-500 text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 ${interval === '1D' ? 'bg-light-blue' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={() => handleIntervalChange('1D', '1y')}>1D</button>
        <button className={`bg-blue-500 text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 ${interval === '1wk' ? 'bg-light-blue' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={() => handleIntervalChange('1wk', '1y')}>1W</button>
        <button className={`bg-blue-500 text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 ${interval === '1mo' ? 'bg-light-blue' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={() => handleIntervalChange('1mo', '1y')}>1M</button>
        <button className={`bg-blue-500 text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 ${interval === '3mo' ? 'bg-light-blue' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={() => handleIntervalChange('3mo', '3y')}>3M</button>
      </div>
      <ResponsiveContainer width="100%" height={520}>
        <LineChart data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2f4858" />
          <XAxis dataKey="Date" stroke="#7f9eb2" />
          <YAxis stroke="#7f9eb2" />
          <Tooltip wrapperStyle={{ backgroundColor: "#1f364d" }} />
          <Legend verticalAlign="top" height={36} wrapperStyle={{ color: 'white' }} />
          <Line type="monotone" dataKey="Close" stroke="#4a8cbb" dot={false} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockChart;