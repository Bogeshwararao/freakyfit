import ReactApexChart from "react-apexcharts";
import styles from "./Pie.module.scss";

const Pie = () => {
  const chartData = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        show: false,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
    },
  };

  return (
    <div className={styles.chart}>
      <div className={styles.title}>
        <h2>Pie Chart</h2>
        <h3>Risk free Transplantations</h3>
      </div>
      <div className={styles.canvas_wrapper}>
        <ReactApexChart
          series={chartData.series}
          options={chartData.options}
          type="donut"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Pie;
