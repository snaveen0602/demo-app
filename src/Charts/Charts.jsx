import React from "react";
import Chart from "react-apexcharts";
import styles from "./Charts.module.css";

export default function Charts() {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <div className="mixed-chart">
        <Chart options={options} series={series} type="bar" width="500" />
      </div>
      <div className="donut">
        <Chart options={options} series={series} type="line" width="500" />
      </div>
    </div>
  );
}
