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


function LineChart() {
    const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday","Saturday","Sunday"],
      income: [3000, 220, 450, 200, 1000,2903,4892], // upward spike
      
  };
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d");

    if (chartCanvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chartData= {
        labels: data.labels,
        datasets: [
          {
            // label: "Total Income",
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
          
          //  borderColor: "#fff",
          // hoverOffset: 10,
            borderColor: "#624", // for wave line
            borderWidth: 2,
            pointRadius: 10,
          },
         
        ],
      };

      const chartOptions = {
        responsive: true,
        borderColor: "transparent",
        cutout: "70%",//for hole size
        
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
            display: true,
            position: "right",
            labels: {
              color: "#333",
              font: {
              family: 'BitCount_Single',
              size: 12,
              weight: 500,
            },
             boxWidth: 14, // size of the color box
            boxHeight: 14,
            useBorderRadius: true,
            borderRadius: 7, // makes the box rounded
            padding: 16, // spacing between labels
          },
        },
          tooltip: {
            enabled: true,
          },
        },
      };

      chartInstance.current = new Chart(chartCanvas, {
        type: "doughnut",
        // type: "pie",
        data: chartData,
        options: chartOptions,
        plugins:[]
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
  `
  return (
    <ChartStyle className="flex items-center mx-auto bg-[#F8FAF7] justify-center flex-col">

      <p className="font-[BitCount_Single]  text-center text-xl">Weekly Sales</p> 
      {/* <div className="flex w-full justify-between items-center mb-4">

      <select name="" id="">
        <option value="">Weekly</option>
      </select>
      </div> */}
      {/* <div className="w-full h-fit"> */}
      <canvas ref={chartRef} className="h-full w-full " />
      {/* </div> */}
    </ChartStyle>
  );
}

export default LineChart;

