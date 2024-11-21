<template>
    <v-container>
      <h2>Your Cart</h2>
      <v-row v-for="item in cartItems" :key="item.competitionId">
        <v-col>
          <p>{{ item.competitionName }} - £{{ item.ticketPrice }} each</p>
          <v-text-field v-model="item.quantity" type="number" label="Quantity" @input="updateCart(item)" />
          <v-btn @click="removeFromCart(item.competitionId)">Remove</v-btn>
        </v-col>
      </v-row>
      <p>Total: £{{ cartTotal }}</p>
      <v-btn color="primary" @click="checkout">Checkout</v-btn>
    </v-container>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore(); // Ensure store is being accessed here
      const router = useRouter();
  
      // Access the getters from Vuex
      const cartItems = computed(() => store.getters.cartItems);
      const cartTotal = computed(() => store.getters.cartTotal);
  
      // Methods to commit mutations
      const updateCart = (item) => {
        store.commit('addToCart', item);
      };
      const removeFromCart = (competitionId) => {
        store.commit('removeFromCart', competitionId);
      };
      const checkout = () => {
        router.push('/checkout'); // Redirect to the checkout page
      };
  
      return { cartItems, cartTotal, updateCart, removeFromCart, checkout };
    }
  };
  </script>
  