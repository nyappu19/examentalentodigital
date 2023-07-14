import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
  },
  getters: {
    carritoProductos(state) {
      return state.carrito.map(producto => {
        let productoCarrito = { ...producto };
        productoCarrito.subtotal = productoCarrito.cantidad * productoCarrito.precio;
        return productoCarrito;
      });
    },
    totalCarrito(state, getters) {
      let total = getters.carritoProductos.reduce((accumulator, producto) => accumulator + producto.subtotal, 0);
      if (total > 500) {
        return total * 0.89; // 11% de descuento
      } else {
        return total * 0.95; // 5% de descuento
      }
    },
  },
  mutations: {
    AGREGAR_PRODUCTO_AL_CARRITO(state, producto) {
      let productoExistente = state.carrito.find(p => p.id === producto.id);
      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        state.carrito.push({
          id: producto.id,
          title: producto.title,
          image: producto.image,
          precio: producto.price,
          cantidad: 1,
        });
      }
    },
    MODIFICAR_CANTIDAD_PRODUCTO(state, { idProducto, cantidad }) {
      let producto = state.carrito.find(p => p.id === idProducto);
      if (producto) {
        producto.cantidad = cantidad;
      }
    },
    ELIMINAR_PRODUCTO_DEL_CARRITO(state, index) {
      state.carrito.splice(index, 1);
    },
  },
  actions: {
    agregarProductoAlCarrito({ commit }, producto) {
      commit('AGREGAR_PRODUCTO_AL_CARRITO', producto);
    },
    modificarCantidadProducto({ commit }, { idProducto, cantidad }) {
      commit('MODIFICAR_CANTIDAD_PRODUCTO', { idProducto, cantidad });
    },
    eliminarProductoDelCarrito({ commit }, idProducto) {
      commit('ELIMINAR_PRODUCTO_DEL_CARRITO', idProducto);
    },
  },
  modules: {},
});
