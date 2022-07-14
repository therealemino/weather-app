import data from "~/assets/ng.json"
const cityArray = []

// arrange cities in alphabetical order
for (let i = 0; i < data.length; i++) {
  cityArray.push(data[i].city)
}

const date = new Date()

export const state = () => ({
    city: null,
    weatherData: null,
    cities: cityArray.sort(),
    loc: null,
    time: {
      hour: date.getHours(),
      min: date.getMinutes()
    },
    forecastData: null
})

export const mutations = {
  updateCity(state, payload) {
    state.city = payload
  },

  updateTime(state,payload) {
    state.time = payload
  },

  setWeatherData(state, data) {
    state.city = data.name
    state.weatherData = data;
    // console.log(state.weatherData);
  },

  setForecastData(state, data) {
    state.forecastData = data;
    // console.log(state.forecastData);
  }
}

export const actions = {
  getWeatherData({commit}, city) {
    // console.log(city);
    this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`)
    .then(res => commit("setWeatherData", res))
  },
  getForecastData({commit}, city) {
    // console.log(city);
    this.$axios.$get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.API_KEY}`)
    .then(res => commit("setForecastData", res))
  },
  getLocation({commit}, locationInfo) {
    // console.log(locationInfo);
    this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?lat=${locationInfo.latitude}&lon=${locationInfo.longitude}&units=metric&appid=${process.env.API_KEY}`)
    .then(res => commit("setWeatherData", res))  
    this.$router.push({
      name: 'index',
      params: {
        city: true
      }
    })
  },
  getLocationForecast({commit}, locationInfo) {
    // console.log(locationInfo);
    this.$axios.$get(`https://api.openweathermap.org/data/2.5/forecast?lat=${locationInfo.latitude}&lon=${locationInfo.longitude}&units=metric&appid=${process.env.API_KEY}`)
    .then(res => commit("setForecastData", res))    
  },
}
