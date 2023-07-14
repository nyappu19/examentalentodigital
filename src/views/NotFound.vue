<template>
  <div class="notfounddiv text-center">
    <div class="container">
      <img src="../assets/img/404.svg">
      <h1 class="text-dark text-center">ERROR 404 - Página no encontrada</h1>
      <p class="text-dark-50 text-center">La página que estás buscando no existe.</p>
      <br><br>
      <router-link to="/" class="text-dark"><button type="button" class="btn btn-info">Volver</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>
.notfounddiv {
  height: 1200px;
  margin-top: 70px;
}

img {
  width: 50%;
}

h1 {
  margin-top: 70px;
}
</style>
