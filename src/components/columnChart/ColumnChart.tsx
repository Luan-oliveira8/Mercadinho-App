import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ColumnChart: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    },
    yaxis: {
      title: {
        text: "Vendas (R$)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `R$ ${val.toFixed(2)}`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Produto A",
      data: [44, 55, 41, 67, 22, 43],
    },
  ];

  return (
    <div>
      <h2>Vendas Mensais</h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
