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
  
  <script>
  import { computed, reactive } from 'vue';
  import { useStore } from 'vuex';
  import axios from 'axios';
  
  export default {
    setup() {
      const store = useStore();
      const cartItems = computed(() => store.getters.cartItems);
      const cartTotal = computed(() => store.getters.cartTotal);
  
      const cardDetails = reactive({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
      });
  
      const completePurchase = async () => {
        try {
          // Step 1: Create a payment intent by calling the backend
          const response = await axios.post('http://127.0.0.1:8000/api/payment-intent', {
            amount: cartTotal.value * 100, // amount in cents
          });
  
          const clientSecret = response.data.clientSecret;
  
          // Step 2: Confirm payment with Stripe
          const stripe = window.Stripe('ypk_test_51QNgjNABrqpmR6Y5a7Ak0AX1nED13vitWIDuY4irZhnQ5DhqtI3CxZCQEJvJe724qHAXrA7uNeE6fzUAOSm6LMy400LA3zLZ8u')  
          const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: {
                number: cardDetails.number,
                exp_month: cardDetails.expiry.split('/')[0],
                exp_year: '20' + cardDetails.expiry.split('/')[1],
                cvc: cardDetails.cvv
              },
              billing_details: {
                name: cardDetails.name
              }
            }
          });
  
          if (error) {
            alert(error.message);
            return;
          }
  
          // Step 3: If payment is successful, send order details to backend
          if (paymentIntent.status === 'succeeded') {
            const orderResponse = await axios.post('http://127.0.0.1:8000/api/orders', {
              cart: cartItems.value,
              paymentIntentId: paymentIntent.id,
            });
  
            store.commit('clearCart');
            alert('Purchase completed successfully!');
            console.log(orderResponse.data);
          } else {
            alert('Payment failed. Please try again.');
          }
        } catch (error) {
          console.error('Error completing purchase:', error);
          alert('Failed to complete purchase. Please try again.');
        }
      };
  
      return { cartItems, cartTotal, cardDetails, completePurchase };
    }
  };
  </script>
  