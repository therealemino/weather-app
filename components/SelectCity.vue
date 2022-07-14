<template>
  <div class="form">
    <v-form>
      <v-container>
            <div>
              <v-row class="d-flex align-center">
                <v-col cols="12" md="4">
                  <v-select v-model="city" :items="cities" item-text="city" item-value="city"  label="Select City (Nigeria)" class="text-lg select" outlined></v-select>
                </v-col>
                <v-col cols="9" md="5">
                  <v-text-field v-model="city" label="Or Enter City Name" class="text-lg" outlined></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="3" class="px-2 mb-8 d-flex justify-center">
                  <v-btn id="search-button" @click="getWeatherData(); getForecastData(); setTime()">
                    <fa icon="search" class="mr-2"></fa> <div class="d-none d-sm-block">Search</div>
                  </v-btn>
                </v-col>
              </v-row>
              <!-- <v-btn @click="logWeatherData">Show</v-btn> -->
            </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
const date = new Date()
  export default {
    data () {
      return {
        cities: this.$store.state.cities,
        weatherData: this.$store.state.weatherData
      }
    },

    computed: {
      city: {
        get () {
          return this.$store.state.city
        },
        set (value) {
          this.$store.commit('updateCity', value)
        }
      },
     
    },

    watch: {
      weatherData() {
        this.weatherData = this.$store.state.weatherData
      }
    },    

    created() {
      // this.getWeatherInfo()
    },    

    methods: {
      getWeatherData() {
        return this.$store.dispatch("getWeatherData", this.city)
      },

      setTime() {
      const time = {
        hour: date.getHours(),
        min: date.getMinutes()
      }
        return this.$store.commit("updateTime", time)
      },

      logWeatherData(){
        console.log(this.$store.state.weatherData);
      },

      getForecastData() {
        return this.$store.dispatch("getForecastData", this.city)
      }

    }
  }
</script>

<style scoped>
.form {
  font-family: "Nunito";
}
#search-button {
  height: 48px;
}

@media screen and (min-width: 960px) {
    
}


</style>
