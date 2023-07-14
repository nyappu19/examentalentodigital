<template>
  <div>
    <v-app-bar color="black" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>DeTodito</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="nav-link"><v-toolbar-title>Home</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <router-link to="/hombre" class="nav-link"><v-toolbar-title>Vestuario Hombre</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <router-link to="/mujer" class="nav-link"><v-toolbar-title>Vestuario Mujer</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <router-link to="/electronica" class="nav-link"><v-toolbar-title>Electronica</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <router-link to="/carrito" class="nav-link">
        <v-badge>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="route in routes" :key="route.name">
            <router-link :to="{ name: route.name }" class="text-light nav-link">
              <v-list-item-icon>
                <v-icon>{{ route.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ route.title }}</v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      group: null,
      routes: [
        {
          icon: "mdi-home",
          title: "Home",
          name: "home",
        },
        {
          icon: "mdi-tie",
          title: "Vestuario Hombre",
          name: "hombre",
        },
        {
          icon: "mdi-tshirt-crew",
          title: "Vestuario Mujer",
          name: "mujer",
        },
        {
          icon: "mdi-rocket",
          title: "Electrónica",
          name: "electronica",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: purple;
}
</style>
