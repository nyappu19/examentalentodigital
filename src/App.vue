<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
    <carrito :productos="productos"></carrito>
      <router-view/>
    </v-main>
<Footer></Footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue';
import Carrito from './components/Carrito.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Carrito,
    },
};
</script>