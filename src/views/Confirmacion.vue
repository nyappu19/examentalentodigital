<template>
  <div>
    <v-container class="d-flex align-center justify-center flex-column">
      <v-card>
        <v-card-title class="headline text-center">Pedido confirmado</v-card-title>
        <v-card-text>
          La orden número {{ numeroOrden }} ha sido confirmada y la estamos preparando.
        </v-card-text>
      </v-card>
      <div class="mt-4">
        <v-btn color="purple" @click="volverAlInicio">Ir al Home</v-btn>
      </div>
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

<style scoped>
.align-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}
</style>
