<template>
  <v-main>
    <div class="main px-1 py-1">
      <SelectCity />
      <Dashboard />
      <Forecast />
    </div>
  </v-main>
</template>

<script>
import SelectCity from '~/components/SelectCity.vue'
import Dashboard from '~/components/Dashboard.vue'
import Forecast from '~/components/Forecast.vue'

export default {
  data() {
    return {
      title: 'Weather App - Made by Emino',
      components: { SelectCity, Dashboard, Forecast },
    }
  },

  head() {
    return {
      title: 'Weather App - Made by Ejei-Okeke Emmanuel',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Simple weather app created by Ejei-Okeke Emmanuel',
        },
      ],
    }
  },

  computed: {
    city() {
      return this.$route.params.city
    }
  },

  created() {
    if(!this.city) {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=${process.env.API_KEY}`
        )
        .then((res) => this.$store.commit('setWeatherData', res))
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Lagos&units=metric&appid=${process.env.API_KEY}`
        )
        .then((res) => this.$store.commit('setForecastData', res))
    }
  },
}
</script>

<style scoped>
/* MEDIA QUERRIES */
@media screen and (min-width: 600px) {
  .main {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
