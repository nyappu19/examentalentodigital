<template>
  <div>
    <div class="carrito-sidebar">
      <h2>Carrito de compras</h2>
      <v-alert v-if="carritoCount === 0" color="purple" type="info">
        El carrito está vacío
      </v-alert>
      <table v-else>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Título</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in carrito" :key="index">
            <td><img :src="producto.image" height="50"></td>
            <td>{{ producto.title }}</td>
            <td><v-btn color="purple" small @click="eliminarProducto(index)">x</v-btn></td>
          </tr>
        </tbody>
      </table>
      <p>Total: {{ carritoTotal }}</p>
    </div>
    
    <div class="productos-container">
      <!-- Aquí va el contenido de los productos -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Carrito",
  computed: {
    carrito() {
      return this.$store.state.carrito;
    },
    carritoCount() {
      return this.$store.getters.carritoCount;
    },
    carritoTotal() {
      return this.$store.getters.totalCarrito;
    },
  },
  methods: {
    eliminarProducto(index) {
      this.$store.commit('ELIMINAR_PRODUCTO_DEL_CARRITO', index);
    },
  },
};
</script>

<style scoped>
.carrito-sidebar {
  float: left;
  width: 30%;
  padding: 20px;
}

.productos-container {
  float: left;
  width: 70%;
  padding: 20px;
}
</style>
