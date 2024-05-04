import { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

function StockChart({ticker}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const reponse = await axios.get(`http://127.0.0.1:5000/history/${ticker}`);
        setData(reponse.data);
      } catch(error){
        console.error('Failed to fetch data', error)
      }
    }

    fetchData();
  }, [ticker]);

  return (
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
  );
}

export default StockChart;
