 <template>
  <div>
      <v-container>
        <v-card v-if="weatherData !== null" class="px-5 py-5 data" data-aos="zoom-in" data-aos-duration="2000">
          <v-row>
            <!-- main info (temperature and city name) -->
            <v-col cols="9" class="d-flex align-center">
                <div  class="city">
                    <div class="city-name">{{ city }} <span class="time">{{ hour + ":" + min }}</span> </div>
                    <!-- <div class="date"></div> -->
                    <div class="temp">{{ temp }}</div>
                    <div class="details">{{ desc }}</div>
                </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3" class="d-flex justify-end align-center cloud">
                <img :src="icon" alt="">
            </v-col>
          </v-row>
          <div>
            <!-- sub-info -->
            <v-row>
              <v-col cols="" class="d-flex align-center">
                <fa icon="thermometer-three-quarters" class="text-h5 mr-4"></fa>
                <span>Pressure</span>
                <v-spacer></v-spacer>
                <span>{{ pressure }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="" class="d-flex align-center">
                <fa icon="tint" class="text-h5 mr-2"></fa>
                <span>Humidity</span>
                <v-spacer></v-spacer>
                <span>{{ humidity }}%</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="" class="d-flex align-center">
                <fa icon="wind" class="text-h5 mr-2"></fa>
                <span>Wind Speed</span>
                <v-spacer></v-spacer>
                <span>{{ wind.speed }} m/s</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="" class="d-flex align-center">
                <fa icon="compass" class="text-h5 mr-2"></fa>
                <span>Wind Direction</span>
                <v-spacer></v-spacer>
                <span>{{ wind.deg }} °</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="" class="d-flex align-center">
                <fa icon="eye" class="text-h5 mr-2"></fa>
                <span>Visibility</span>
                <v-spacer></v-spacer>
                <span>{{ visibility }} </span>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-container>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos"
  export default {
    mixins:[aosMixin],
    computed: {
      weatherData() {
        return this.$store.state.weatherData
      },
      city() {
        return this.$store.state.weatherData.name
      },
      desc() {
        return this.$store.state.weatherData.weather[0].description
      },
      temp() {
        const cTemp = this.$store.state.weatherData.main.temp
        return cTemp +"°C"
      },
      icon() {
        const iconCode = this.$store.state.weatherData.weather[0].icon
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
        return iconUrl
      },
      pressure(){
        const pressureValue = this.$store.state.weatherData.main.pressure
        return pressureValue + " hPa"
      },
      wind(){
        const wind = this.$store.state.weatherData.wind
        return wind
      },
      humidity(){
        const humidity = this.$store.state.weatherData.main.humidity
        return humidity
      },
      visibility(){
        const visibility = this.$store.state.weatherData.visibility
        return visibility/1000 + " km"
      },
      hour() {
        return this.$store.state.time.hour
      },
      min() {
        return this.$store.state.time.min
      }

    },

    methods: {

    },
  }
</script>

<style scoped>
.city, .data {
  font-family: "Lato", sans-serif;
}

.city-name {
  font-size: 1.2em;
  font-weight: 700;
}

.temp {
    font-size: 2em;
    font-weight: bold;
}

.details {
  font-size: 1em;
}

.details:first-letter {
    text-transform:capitalize;
}

.date, .time {
  font-size: 0.8em;
  font-weight: 100;
}

</style>
