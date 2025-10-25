"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

// ✅ Type-safe chart data
const data: ChartData<"line"> = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 5003, 2045, 3904, 5902, 1892],
      borderColor: "#A3D08C",
      backgroundColor: "rgba(163, 208, 140, 0.3)",
      fill: true,
      tension: 0.4, // smooth line
    },
    {
      label: "Purchase",
      data: [2400, 1398, 9800, 3908, 4800, 3800, 4300, 2902, 3923, 4920, 6723, 4890],
      borderColor: "#FFD87A",
      backgroundColor: "rgba(255, 216, 122, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
};

// ✅ Type-safe chart options
const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const LineChart: React.FC = () => {
  return (
    <div className="w-[65%] h-[370px] bg-[#F8FAF7] p-4 rounded-lg shadow-md">
      <div className="flex w-full justify-between items-center mb-4">
        <h1 className="font-[BitCount_Single] text-xl">Monthly Sales</h1>
        <select
          name="month"
          className="font-[Bricolage_Grotesque]"
          id="month"
        >
          <option value="">January</option>
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
