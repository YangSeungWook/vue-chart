<template>
  <div>
    <canvas ref="lineChart" id="myChart_line" width="400" height="400"></canvas>
  </div>
</template>

<script>
//import Chart from "chart.js/auto";

export default {
  mounted() {
    var ctx = this.$refs.lineChart;
    //var myChart = new Chart(ctx, {
    var myChart = new this.$_Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
    });
    console.log(myChart);
  },
};
</script>

<style></style>
