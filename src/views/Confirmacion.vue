<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="headline text-center">Pedido confirmado</v-card-title>
        <v-card-text>
          La orden número {{ numeroOrden }} ha sido confirmada y la estamos preparando.
        </v-card-text>
      </v-card>
      <v-btn color="purple" @click="volverAlInicio">Ir al Home</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numeroOrden: null,
    };
  },
  created() {
    this.generarNumeroOrden();
  },
  methods: {
    generarNumeroOrden() {
      this.numeroOrden = Math.floor(Math.random() * 1000000) + 1;
    },
    volverAlInicio() {
      this.$router.push("/");
    },
  },
};
</script>
