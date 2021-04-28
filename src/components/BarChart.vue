<template>
  <div>
    <canvas ref="barChart" id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>

export default {
  props : ['propsdata'],
  mounted() {
    //var ctx = document.getElementById("myChart");
    var ctx = this.$refs.barChart;
    var myChart = new this.$_Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    console.log(myChart)
  },
};
</script>

<style></style>
