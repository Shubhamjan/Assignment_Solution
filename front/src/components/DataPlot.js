import React from 'react';
import { Chart } from 'chart.js';

function DataPlot({ data }) {
  const chartRef = React.createRef();

  useEffect(() => {
    const timestamps = data.map(point => point.timestamp);
    const values = data.map(point => point.sampleValue);
    const colors = values.map(value => (value === 0 ? 'yellow' : value === 1 ? 'green' : 'red'));

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [{
          label: 'Sample Data',
          data: values,
          backgroundColor: colors,
          borderColor: 'black',
        }]
      },
      options: {
        
      }
    });
  }, [data]);

  return <canvas ref={chartRef} />;
}

export default DataPlot;