import Chart from 'chart.js/auto';

export default {
  install(Vue){
    Vue.prototype.$_Chart = Chart;

    // 사용법 - this.$_Chart
  }
}