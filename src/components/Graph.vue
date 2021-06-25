<template>
  <div class="graph">
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    <img class="graph__vector" src="@/assets/Vector.svg" @click="$bus.$emit('graph:close')" alt="vector">
  </div>
</template>

<script>
export default {
  props: {
    card : { required: true, type: Object }
  },
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: []
          }
        ]
      }
    };
  },
   created() {
    Object.values(this.card.data[0]).forEach(e => this.chartOptions.series[0].data.push(e.high) )
  },
  watch: {
    card(value) {
      if(this.chartOptions.series[0].data.length) {
        this.chartOptions.series[0].data = []
        Object.values(value.data[0]).forEach(e => this.chartOptions.series[0].data.push(e.high) )
      }else {
        Object.values(value.data[0]).forEach(e => this.chartOptions.series[0].data.push(e.high) )
       }
      }
    }
};
</script>
<style lang="scss">
.graph {
  position: relative;
  width: 100%;
  .hc {
    width: 100%;
  }
  &__vector {
    position: absolute;
    right: 0;
    top: 0;
  }
}

</style>
