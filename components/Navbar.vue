<template>
  <div>
    <v-card
      color="grey lighten-4"
      flat
      tile
    >
      <v-toolbar class="navbar">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>
          <nuxt-link id="title" to="/">Weather</nuxt-link> 
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <NuxtLink to="/" class="nav-link d-none d-sm-block">
          <v-btn>Home</v-btn>
        </NuxtLink>
        <NuxtLink to="/about" no-prefetch class="nav-link d-none d-sm-block">
        <!-- tablets and laptops -->
          <v-btn>About</v-btn>
        </NuxtLink>

        <NuxtLink to="/about" no-prefetch class="nav-link d-block d-sm-none">
          <!-- phone -->
          <fa icon="question" class="white--text"></fa>
        </NuxtLink>

        <v-btn icon @click="getLocation">
          <fa icon="map-marker-alt"></fa>
        </v-btn>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition(
          position => {
             const location = {
              latitude : position.coords.latitude,
              longitude : position.coords.longitude
             }
            // console.log(location);
            this.$store.dispatch('getLocation', location)
            this.$store.dispatch('getLocationForecast', location)

          },
          error => {
            console.log(error.message);
            return error.message
          },
          {timeout:10000}
      )
    }    
  }
}
</script>


<style>
  #title {
    text-decoration: none;
    color: #fff;
    font-weight: 800;
  }
  .navbar {
    text-transform: uppercase;
  }
  .nav-link {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    padding: 0.25vw;
    color: #61122f;
  }
</style>
