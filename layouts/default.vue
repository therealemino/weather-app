<template>
  <div>
    <v-app>
      <Navbar />
      <v-main>
        <Nuxt />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  data () {
    return {
      title: 'Vuetify.js',
      components: {Navbar,Footer}
    }
  }
}
</script>


<style scoped>
</style>
