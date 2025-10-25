"use client";
import { useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions, Plugin } from "chart.js/auto";
import styled from "styled-components";

// Optional: define props if you plan to make it reusable
interface BarChartProps {
  data?: {
    labels: string[];
    income: number[];
  };
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"bar"> | null>(null);

  const chartData: ChartData<"bar"> = {
    labels: data?.labels ?? ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Total Income",
        data: data?.income ?? [200, 220, 300, 400, 450, 200, 1000],
        backgroundColor: ["#8ca607", "#0a0a2a", "#FFD87A", "#222258", "#A3D08C"],
        borderWidth: 2,
        borderColor: "#8ca607",
      },
    ],
  };

  const dashedGridLinesPlugin: Plugin<"bar"> = {
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

      y.ticks.forEach((_tick: unknown, index: number) => {
        const yPos = y.getPixelForTick(index);
        ctx.beginPath();
        ctx.moveTo(left, yPos);
        ctx.lineTo(right, yPos);
        ctx.stroke();
      });

      ctx.restore();
    },
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        type: "category",
        grid: {
          display: false,
          color: "#E5E7EB",
        },
        ticks: {
          padding: 4,
          color: "#333",
          font: {
            weight: 500,
            size: 12,
          },
        },
        offset: true,
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          stepSize: 300,
        },
      },
    },
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
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  useEffect(() => {
    const chartCanvas = chartRef.current?.getContext("2d");

    if (chartCanvas) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

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
          <option value="">Last 10 Days</option>
        </select>
      </div>
      <canvas ref={chartRef} className="h-full w-full" />
    </ChartStyle>
  );
};

export default BarChart;
