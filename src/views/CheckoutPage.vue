<template>
    <v-container>
      <h2>Checkout</h2>
      <v-row v-for="item in cartItems" :key="item.competitionId">
        <v-col>
          <p>{{ item.competitionName }} - £{{ item.ticketPrice }} each</p>
          <p>Quantity: {{ item.quantity }}</p>
        </v-col>
      </v-row>
      <p>Total: £{{ cartTotal }}</p>
  
      <h3>Payment Details</h3>
      <v-form>
        <v-text-field label="Card Number" v-model="cardDetails.number" />
        <v-text-field label="Cardholder Name" v-model="cardDetails.name" />
        <v-text-field label="Expiry Date (MM/YY)" v-model="cardDetails.expiry" />
        <v-text-field label="CVV" v-model="cardDetails.cvv" type="password" />
      </v-form>
  
      <v-btn color="primary" @click="completePurchase">Complete Purchase</v-btn>
    </v-container>
  </template>
  
  <script src="https://js.stripe.com/v3/"></script>
  <script>
  import { computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  import axios from 'axios';
  
  export default {
    setup() {
        const store = useStore();

        const cartItems = computed(() => store.getters.cartItems);
        const cartTotal = computed(() => store.getters.cartTotal);

        // Placeholder for payment details
        const cardDetails = reactive({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
        });
  
        const completePurchase = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/orders', {
                    cart: cartItems.value,
                });

                store.commit('clearCart');
                alert('Purchase completed successfully!');
                console.log(response.data);
            } catch (error) {
                console.error('Error completing purchase:', error);
                alert('Failed to complete purchase. Please try again.');
            }
        };

  
      return { cartItems, cartTotal, cardDetails, completePurchase };
    }
  };
  </script>
  