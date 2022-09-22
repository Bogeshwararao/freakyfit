import ReactApexChart from "react-apexcharts";
import styles from "./Columns.module.scss";

const Columns = () => {
  const chartData = {
    series: [
      {
        data: [21, 22, 10, 28, 16],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ["#999BF5"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [["Sep"], ["Oct"], ["Nov"], "Dec", ["Jun"]],
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <div className={styles.title}>
        <h2>No of Organs donated every month:</h2>
        <h3>Bar Charts</h3>
      </div>
      <div className={styles.canvas_wrapper}>
        <ReactApexChart
          series={chartData.series}
          options={chartData.options}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Columns;
