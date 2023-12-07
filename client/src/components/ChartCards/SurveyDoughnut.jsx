import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Latest Survey Results',
      font: {
        size: 20,
      },
    },
    // customCanvasBackgroundColor: {
    //   color: 'rgba(197, 230, 232, 0.2)',
    // }
  },
};

// const chartAreaBackground = {
//   id: 'chartAreaBackground',
//   beforeDatasetDraw(chart, args, plugins) {
//     const { ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
//     ctx.save();

//     ctx.fillStyle = "rgba(130, 205, 209, 0.2)",
//     ctx.fillRect(left, top, width, height);
//   }
// }

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Stress Factor Value',
      data: [4, 1, 3, 5, 2, 3, 4, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return <Doughnut 
  options={options} 
  data={data} 
  // plugins={[chartAreaBackground]}
  />;
}