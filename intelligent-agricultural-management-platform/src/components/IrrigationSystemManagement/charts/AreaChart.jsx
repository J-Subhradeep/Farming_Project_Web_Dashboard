import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, TimeScale, Tooltip, Legend, LinearScale, PointElement } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(LineElement, TimeScale, Tooltip, Legend, LinearScale, PointElement);

const AreaChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.timestamp),
    datasets: [
      {
        label: 'Boolean Variable',
        data: data.map((entry) => (entry.value ? 1 : 0)), // Map true/false to 1/0
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute', // Adjust the unit as needed (e.g., 'hour', 'day')
        },
        title: {
          display: true,
          text: 'Date-Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Pump State',
        },
        ticks: {
          callback: (value) => (value === 1 ? 'On' : 'Off'), // Display "True" for 1 and "False" for 0
          min: 0,
          max: 1,
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if only one dataset is used
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default AreaChart;
