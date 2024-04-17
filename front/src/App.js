import React, { useState, useEffect } from 'react';
import DataPlot from './components/DataPlot';
import SummeryTable from './components/SummeryTable';
import dataServices from './services/dataServices';

function App() {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await dataServices.getData();
      setData(response.data);
   
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <DataPlot data={data} />
      <SummeryTable summary={summary} />
    </div>
  );
}

export default App;