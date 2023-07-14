<template>
  <div>
    <div>
      <v-container class="my-8">
        <h2 class="text-center">Vestuario de Mujer</h2>
        <v-row justify="center">
          <v-col v-for="(producto, index) in productos" :key="index" cols="12" sm="6" md="4" class="my-4">
            <v-card>
              <v-img :src="producto.image" :alt="producto.title" height="400" width="400" class="fill-height fill-width"></v-img>
              <v-card-title>{{ producto.title }}</v-card-title>
               <v-card-text>{{ producto.description }}</v-card-text>
              <v-card-text>Price: $ {{ Number(producto.price).toLocaleString("es-CL") }}</v-card-text>
              <v-btn color="blue"> Agregar </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import productosData from '@/assets/json/ropaMujer.json';

export default {
  name: 'VestuarioMujer',
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    this.productos = productosData;
  },
};
</script>

<style scoped>
/* Estilos adicionales para el componente VestuarioHombre */
</style>
