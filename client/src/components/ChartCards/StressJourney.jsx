/* eslint-disable react/prop-types */
// import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
      position: "top",
    },
    title: {
      display: true,
      text: "Stress Journey",
      font: {
        size: 20,
      },
    },
  },
  scales: {
    y: {
      min: 0,
      max: 5,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const labels = [
  "12/2/2023",
  "12/3/2023",
  "12/4/2023",
  "12/5/2023",
  "12/6/2023",
  "12/7/2023",
  "12/8/2023",
  "12/9/2023",
  "12/10/2023",
];
// I Moved the const data object into the export function.
// eslint-disable-next-line react/prop-types
// TODO: We need to use 2 arrays for both the labels and the data. We need a loop that takes the avgValue of stress and add it to the array for data, and string split the date, and add it to the label. If order does not work, then go to backend of app and use .sort.
// Use .sort at the backend surver for MongoDB first
export default function SurveyJourney({ surveys }) {
  console.log(surveys);
  console.log(surveys[0].createdAt);
  const data = {
    labels,
    datasets: [
      {
        label: "Stress Level by Date",
        data: [2.4, 2.6, 2.0, 1.5, 3.4, 3.7, 4.2, 3.9, 3.8],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
