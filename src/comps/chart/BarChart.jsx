"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
// import { ChartData, ChartOptions } from "chart.js";
import "chart.js/auto";
import styled from "styled-components";

// interface LineChartProps {
//   data: {
//     labels: string[];
//     income: number[];
//     // outcome?: number[];
//   };

function BarChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    income: [200, 220, 300, 400, 450, 200, 1000], // upward spike
  };
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const dashedGridLinesPlugin = {
    id: "dashedGridLines",
    beforeDatasetsDraw(chart) {
      const {
        ctx,
        chartArea: { left, right },
        scales: { y },
      } = chart;
      ctx.save();
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";

      y.ticks.forEach((any, index) => {
        const yPos = y.getPixelForTick(index);
        ctx.beginPath();
        ctx.moveTo(left, yPos);
        ctx.lineTo(right, yPos);
        ctx.stroke();
      });

      ctx.restore();
    },
  };

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d");

    if (chartCanvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chartData = {
        labels: data.labels,
        datasets: [
          {
            // label: "Total Income",
            data: data.income,

            backgroundColor: [
              "#8ca607",
              "#0a0a2a",
              "#FFD87A",
              "#222258",
              "#A3D08C",
            ], // borderColor: "#8ca607", // for wave line
            borderWidth: 2,
            pointRadius: 0,
            pointBackgroundColor: "#0a0a2a",
            pointBorderColor: "#fff",

            tension: 2.8,
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        borderColor: "transparent",
        scales: {
          x: {
            type: "category",

            grid: {
              display: false,
              color: "#E5E7EB",
            },

            border: {
              display: true,
              dash: [3, 3],
            },
            ticks: {
              padding: 4,
              color: "#333",
              font: {
                weight: 500,
                size: 12,
                // family: `${plusJakata.className}`,
              },
            },
            offset: true,
          },
          y: {
            grid: {
              display: true,
            },
            position: "left", // Corrected to 'left'
            border: {
              display: false,
            },
            beginAtZero: true,
            ticks: {
              // padding: 2,
              stepSize: 300, //contring the line spacing
            },
          },
        },
        layout: {
          padding: {
            left: 20, // increase this for more space between Y labels and chart
          },
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            // position: "bottom",
            // align: "center",
            display: true, //for label thick circle
            // labels: {
            //   boxHeight: 20,
            //   boxWidth: 20,
            //   useBorderRadius: true,
            //   borderRadius: 10,
            //   color: "#191919",
            //   textAlign: "center",
            //   font: {
            //     weight: 600,
            //     size: 12,
            //     lineHeight: "100%",
            //     // family: `${plusJakata.className}`,
            //   },

            // },
          },
          tooltip: {
            enabled: true,
          },
        },
      };

      chartInstance.current = new Chart(chartCanvas, {
        type: "bar",
        data: chartData,
        options: chartOptions,
        plugins: [dashedGridLinesPlugin],
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);
  const ChartStyle = styled.div`
    width: 65%;
    opacity: 1;
    height: 350px;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  `;
  return (
    <ChartStyle className="flex items-start mx-auto bg-[#F8FAF7] justify-center flex-col">
      <div className="flex w-full justify-between items-center mb-4">
        <h1 className="font-[BitCount_Single] text-xl">Product views</h1>
        <select name="" className="font-[Bricolage_Grotesque]" id="">
          <option value="">Last 10 Day</option>
        </select>
      </div>
      {/* <div className="w-full h-fit"> */}
      <canvas ref={chartRef} className="h-full w-full " />
      {/* </div> */}
    </ChartStyle>
  );
}

export default BarChart;
