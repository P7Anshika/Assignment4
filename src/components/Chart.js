import React from 'react';

const Chart = () => {
  const data = [65, 59, 80, 81];
  const labels = ['January', 'February', 'March', 'April'];

  return (
    <div>
      <h2>Sales Data</h2>
      <svg width="400" height="200">
        {data.map((value, index) => (
          <rect
            key={index}
            x={index * 90}
            y={200 - value}
            width="80"
            height={value}
            fill="blue"
          />
        ))}
        {labels.map((label, index) => (
          <text key={index} x={index * 90 + 20} y={190}>
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default Chart;
