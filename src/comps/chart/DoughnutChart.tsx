"use client";
import { useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions } from "chart.js/auto";
import styled from "styled-components";

interface Data {
  labels: string[];
  income: number[];
}

export default function DoughnutChart(){
  const data: Data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    income: [3000, 220, 450, 200, 1000, 2903, 4892],
  };

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d");

    if (chartCanvas) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chartData: ChartData<"doughnut"> = {
        labels: data.labels,
        datasets: [
          {
            data: data.income,
            backgroundColor: [
              "#8ca607",
              "rgba(163, 208, 140, 0.3)",
              "#0a0a2a",
              "#252250",
              "#A3D08C",
              "#e27f46",
              "#18ec78",
            ],
            borderColor: "#624",
            borderWidth: 2,
          },
        ],
      };

      const chartOptions: ChartOptions<"doughnut"> = {
        responsive: true,
        cutout: "70%",
        layout: {
          padding: {
            left: 20,
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              color: "#333",
              font: {
                family: "BitCount_Single",
                size: 12,
                // weight: 500,
              },
              boxWidth: 14,
              boxHeight: 14,
              useBorderRadius: true,
              borderRadius: 7,
              padding: 16,
            },
          },
          tooltip: {
            enabled: true,
          },
        },
      };

      chartInstance.current = new Chart(chartCanvas, {
        type: "doughnut",
        data: chartData,
        options: chartOptions,
        plugins: [],
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  const ChartStyle = styled.div`
    width: 33%;
    opacity: 1;
    height: 310px;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  `;

  return (
    <ChartStyle className="flex items-center mx-auto bg-[#F8FAF7] justify-center flex-col">
      <p className="font-[BitCount_Single] text-center text-xl">Weekly Sales</p>
      <canvas ref={chartRef} className="h-full w-full" />
    </ChartStyle>
  );
};

