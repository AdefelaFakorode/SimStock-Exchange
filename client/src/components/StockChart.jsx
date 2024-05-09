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
  }, [ticker, interval, period, data]);  // Depend on period as well

  const handleIntervalChange = (newInterval, newPeriod) => {
    setInterval(newInterval);
    setPeriod(newPeriod);  // Set period when interval changes
  };

  const borderColor = "rgba(243, 243, 243, 0.3)";
  return (
    <div className={"bg-background text-black p-4 border-[.1px]"}
    style={{ borderColor: borderColor }}
    >
      <div className='flex  justify-end mb-4 space-x-3'>
        <button className={`bg-background text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 border-2 ${interval === '1D' ? 'bg-buttonColor text-black' : 'bg-background hover:bg-hoverButtonColor'}`} onClick={() => handleIntervalChange('1D', '1mo')}>1D</button>
        <button className={`bg-background text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 border-2 ${interval === '1wk' ? 'bg-buttonColor text-black' : 'bg-background hover:bg-hoverButtonColor'}`} onClick={() => handleIntervalChange('1wk', '3mo')}>1W</button>
        <button className={`bg-background text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 border-2 ${interval === '1mo' ? 'bg-buttonColor text-black' : 'bg-background hover:bg-hoverButtonColor'}`} onClick={() => handleIntervalChange('1mo', '1y')}>1M</button>
        <button className={`bg-background text-sm font-medium py-1 px-3 rounded-lg transition-colors duration-200 border-2 ${interval === '3mo' ? 'bg-buttonColor text-black' : 'bg-background hover:bg-hoverButtonColor'}`} onClick={() => handleIntervalChange('3mo', '3y')}>3M</button>
      </div>
      <ResponsiveContainer width="100%" height={620}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" />
          <XAxis
            dataKey="Date"
            stroke="#e7e2d7"
            angle={-35} // Rotates the labels
            textAnchor="end" // Keeps the text anchored at the end, making it look neater when rotated
            height={60} // Increase height to accommodate rotated text
            tick={{ fontSize: 12 }} // Smaller font size
          />

          <YAxis stroke="#e7e2d7" />
          <Tooltip wrapperStyle={{ backgroundColor: "#1f364d" }} />
          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ color: "white" }}
          />
          <Line
            type="monotone"
            dataKey="Close"
            stroke="#a7997a"
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StockChart;