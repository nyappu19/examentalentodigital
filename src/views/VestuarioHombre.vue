<template>
  <div>
    <carrito :productos="productos"></carrito>
    <v-container class="my-8">
      <h2 class="text-center">Vestuario de Hombre</h2>
      <v-row justify="center">
        <v-col
          v-for="(producto, index) in productoshombre"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="my-4"
        >
          <v-card>
            <v-img
              :src="producto.image"
              :alt="producto.title"
              height="400"
              width="400"
              class="fill-height fill-width"
            ></v-img>
            <v-card-title>{{ producto.title }}</v-card-title>
            <v-card-text>{{ producto.description }}</v-card-text>
            <v-card-text>
              Price: $
              {{
                Number(producto.price).toFixed(0).toLocaleString('es-CL')
              }}
            </v-card-text>
            <v-btn color="purple" @click="agregarProducto(producto)">Agregar al carrito</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import productosData from '@/assets/json/ropaHombre.json';
import Carrito from '../components/Carrito.vue';

export default {
  name: 'VestuarioHombre',
  components: {
    Carrito,
  },
  data() {
    return {
      productoshombre: [],
    };
  },
  mounted() {
    this.productoshombre = productosData;
  },
  methods: {
    agregarProducto(producto) {
      this.$store.dispatch('agregarProductoAlCarrito', producto);
    },
  },
};
</script>

<style scoped>
</style>
