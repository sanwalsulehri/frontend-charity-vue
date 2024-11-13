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
      <v-btn text to="/cart"> Cart ({{ $cartCount }}) </v-btn>
    </v-app-bar>

    <!-- Main Content Area -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import 'vuetify/styles';

// Vuetify instance

export default {
  name: 'App',
  setup() {
    const cartCount = computed(() => useStore().getters.cartCount);

    return { cartCount };

  },
};
</script>

<style>
/* Optional: global styles */
</style>
