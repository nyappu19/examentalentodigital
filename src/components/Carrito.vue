<template>
  <div>
    <div class="carrito-sidebar">
      <h2>Carrito de compras</h2>
      <v-alert v-if="carritoCount === 0" color="purple" type="info">
        El carrito está vacío
      </v-alert>
      <table v-else>
        <tbody>
          <tr v-for="(producto, index) in carrito" :key="producto.key">
            <td><img :src="producto.image" height="60" /></td>
            <td>{{ producto.title }}</td>
            <td>
              <input type="number" v-model="producto.cantidad" min="1" @change="actualizarCantidad(index)" class="cantidad-input" />
            </td>
            <td>
              <v-btn color="purple" small @click="eliminarProducto(index)"
                >x</v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div class="subtotal">
        <p>Subtotal productos: $ {{ subtotal.toFixed(0) }}</p>
        <p v-if="descuento > 0">Descuentos: -$ {{ descuento.toFixed(0) }}</p>
        <p><strong>Total:</strong> $ {{ total.toFixed(0) }}</p>
      </div>
            <router-link to="/pagar"><v-btn color="purple">Pagar</v-btn></router-link>
    </div>

    <div class="productos-container"></div>
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
    subtotal() {
      return this.$store.getters.totalCarrito;
    },
    descuento() {
      if (this.subtotal < 500) {
        return this.subtotal * 0.05;
      } else {
        return this.subtotal * 0.11;
      }
    },
    total() {
      return this.subtotal - this.descuento;
    },
  },
  methods: {
    eliminarProducto(index) {
      this.$store.commit("ELIMINAR_PRODUCTO_DEL_CARRITO", index);
    },
    actualizarCantidad(index) {
      this.$store.commit("ACTUALIZAR_CANTIDAD_PRODUCTO", {
        index: index,
        cantidad: this.carrito[index].cantidad,
      });
    },
  },
};
</script>

<style scoped>
.carrito-sidebar {
  float: left;
  width: 30%;
  padding: 20px;
  border: 3px solid #3b0053;
}

.subtotal {
  margin-top: 20px;
}

.productos-container {
  float: left;
  width: 70%;
  padding: 20px;
}

.cantidad-input {
  width: 40px;
  text-align: center;
}
</style>