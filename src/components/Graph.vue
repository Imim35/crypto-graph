<template>
  <div class="graph">
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    <span class="graph__vector"  @click="$bus.$emit('graph:close')" alt="vector"></span>
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
    Object.values(this.card.data).forEach(e => this.chartOptions.series[0].data.push(e.high) )
   },

  watch: {
    card(value) {
      if(this.chartOptions.series[0].data.length) {
        this.chartOptions.series[0].data = []
        Object.values(value.data).forEach(e => this.chartOptions.series[0].data.push(e.high) )
      } else {
        Object.values(value.data).forEach(e => this.chartOptions.series[0].data.push(e.high) )
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
    height: 12.25px;
    width: 12.25px;
    background-image: url("../assets/Vector.svg");
    background-size: cover;
    right: 0;
    top: 0;
    transition: 0.3s ease;
    &:hover {
      background-image: url("../assets/VectorBlue.svg");
    }
  }
}
</style>
