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
      
      <!-- Dynamically switch between 'Login/Register' and 'My Account' -->
      <v-btn text :to="isLoggedIn ? '/user' : '/login'">
        {{ isLoggedIn ? 'My Account' : 'Login/Register' }}
      </v-btn>
      
      <v-btn text to="/cart">Cart ({{ cartCount }})</v-btn>
    </v-app-bar>

    <!-- Main Content Area -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const cartCount = computed(() => store.getters.cartCount); // Get cart count
    const isLoggedIn = computed(() => store.getters.isLoggedIn); // Get login status

    // Ensure login status is updated when the app is initialized
    onMounted(() => {
      store.dispatch('updateLoginStatus');
    });

    return {
      cartCount,
      isLoggedIn,
    };
  },
};
</script>
