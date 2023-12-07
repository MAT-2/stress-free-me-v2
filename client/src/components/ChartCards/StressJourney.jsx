import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Stress Journey',
      font: {
        size: 20,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 10,
      ticks: {
        stepSize: 1,
      }
    }
  },
};

const labels = [
  'Date 1', 
  'Date 2', 
  'Date 3', 
  'Date 4', 
  'Date 5', 
  'Date 6', 
  'Date 7', 
  'Date 8', 
  'Date 9'
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Stress Level by Date',
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      data: [4.5, 6.4, 7.5, 8, 7, 9.2, 5.6, 4.3, 6],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function App() {
  return <Line 
  options={options} 
  data={data}
  />;
}