<template>
<v-main>
    <v-container class="main">
        <div class="text-h3 py-4 main-header">About</div>
        <div class="#main-content">
            Simple weather app. Use to check current weather information and forecast as well. Built with Nuxt.js, Openweathermap (API), Vuetify (style) and Chart.js (data-visualisation). Click on the "dropped pin" symbol on the top right corner of your screen to view the current weather condition and forecast of your current location. You can also search for any city of your choice and get the respective weather data.
        </div>
        <div>Made with ❤️ from Emino.</div>
    </v-container>
</v-main>
</template>

<script>
export default {
 data () {
    return {
      title: 'About - Simple weather app',
    }
  },    
}
</script>

<style scoped>
.main {
    font-family: 'Lato' sans-serif;
}

div#main-content {
    font-family: 'Lato' sans-serif; 
    font-size: 1.2em;
}
</style>