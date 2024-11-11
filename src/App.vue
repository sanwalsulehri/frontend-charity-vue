<template>
  <v-app>
    <!-- App Bar (Top Navbar) -->
    <v-app-bar app>
      <v-toolbar-title>CharityComps</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Navigation Links -->
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/competitions">Competitions</v-btn>
      <v-btn text to="/about">About</v-btn>
      <v-btn text to="/login">Login/Register</v-btn>

    </v-app-bar>

    <!-- Main Content Area -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { createApp } from 'vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

// Vuetify instance
const vuetify = createVuetify();

export default {
  name: 'App',
  setup() {
    const app = createApp({
      name: 'App',
    });

    app.use(vuetify);
    app.use(router);
    app.mount('#app');
  },
};
</script>

<style>
/* Optional: global styles */
</style>
