import ReactApexChart from "react-apexcharts";
import styles from "./Spline.module.scss";

const Spline = ({ title, sales, percentage }) => {
  const chartData = {
    series: [
      {
        name: "Sales_1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Sales_2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        type: "area",
        background: "rgb(248,250,252)",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },

      legend: {
        show: false,
      },

      colors: ["#999BF5", "#CBD5E1"],

      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },

      yaxis: {
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },

      grid: {
        show: false,
      },
    },
  };

  return (
    <div className={styles.chart}>
      <div className={styles.description}>
        <h2>{`${title}`}</h2>
        <h3>Sales</h3>
        <div className={styles.sales}>
          <span>{`$${sales}`}</span>
          <div
            className={`
          ${styles.percentage}
          ${
            percentage >= 0 ? styles.percentage_green : styles.percentage_red
          } `}
          >{`${percentage}%`}</div>
        </div>
      </div>
      <div className={styles.canvas_wrapper}>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          className={styles.canvas}
          height="100%"
        />
      </div>
    </div>
  );
};

export default Spline;
