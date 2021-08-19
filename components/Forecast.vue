<template>
  <div>
    <v-container>
      <div v-if="forecastData !== null" >
        <div class="main">3-day Forecast (3-hr interval)</div>
        <v-row>
          <v-col cols="12" md="5" data-aos="fade-right">
            <Chart :chart-data="chartData" :options="options"/>
          </v-col>      
          <v-col cols="12" md="7" data-aos="fade-left" data-aos-duration="2000">
            <v-row class="overflow-x-auto dashboard pt-7" dense>
              <v-col v-for="item in items" :key="items.indexOf(item)" cols="4" sm="3" md="2">
                <v-card class="px-2 py-2 text-subtitle-2 small-text">
                  <div class="">{{item.dt_txt.split(" ")[0]}}, {{item.dt_txt.split(" ")[1].slice(0, -3)}}</div>  <!-- extract date & time-->
                  <div id="card-temp">{{ item.main.temp }}</div>
                  <img :src="'http://openweathermap.org/img/wn/' + item.weather[0].icon + '.png'" alt="">
                  <div>{{ item.weather[0].description }}</div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Chart from "./Chart.vue"
import aosMixin from "~/mixins/aos"

export default {
  components: {Chart},
  mixins: [aosMixin],
  computed: {
    forecastData() {
      // console.log(this.$store.state.forecastData);
      return this.$store.state.forecastData
    },
    items() {
      // console.log(this.$store.state.forecastData.list);
      const items = this.$store.state.forecastData.list.slice(0,24)
      return items
    },
    chartData() {
      const label = []
          const tempData = []
          const forecastData = this.$store.state.forecastData.list
          forecastData.forEach(info => {
              // console.log(info);
              label.push(info.dt_txt.slice(0,-3))
              tempData.push(info.main.temp)
          })
          const chartData = {
            labels: label,
            datasets: [
                {
                label: 'Temperature',
                backgroundColor: '#9695CD',
                data: tempData
                },
            ],              
          }     
        return chartData
    },
    options() {
      return {
        scales: {
          yAxes: [{
              title: {
                display: true,
                text: "Temperature"
              }
          }]
        }
      }
    }
  },
  mounted() {

  },
}
</script>

<style scoped>
.dashboard .text-subtitle-2.small-text {
  font-size: 0.6em !important;
  line-height: 1rem
}

.main {
  text-align: center;
}

div#card-temp {
  font-size: 1.1em;
  font-weight: 700
}

</style>
