<template>
  <div>
    <h1 class="pb-7 d-flex justify-center">Tienda DeTodito</h1>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(producto, index) in mejoresProductos" :key="index">
        <v-sheet :color="producto.color" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h5">{{ producto.title }}</div>
            <img :src="producto.image" :alt="producto.title" class="mt-4">
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

<v-container class="my-8">
      <h2 class="text-center">Categorías de Productos</h2>
      <v-row justify="center">
        <v-col v-for="(categoria, index) in tiposProductos" :key="index" cols="12" sm="6" md="4" class="my-4">
          <v-card>
            <v-img :src="categoria.image" :alt="categoria.name" height="200"></v-img>
            <v-btn color="blue darken-1">{{ categoria.name }}</v-btn>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import homeData from '@/assets/json/home.json';

export default {
  name: 'Home',
  data() {
    return {
      model: 0,
      mejoresProductos: [],
      tiposProductos: [],
    };
  },
  mounted() {
    this.mejoresProductos = homeData.mejoresproductos;
    this.tiposProductos = homeData.tiposproductos;
  },
};
</script>

<style scoped>
/* Estilos adicionales para el componente Home */
</style>
