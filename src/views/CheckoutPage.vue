<template>
  <v-container>
    <h2>Checkout</h2>
    <v-row
      v-for="item in cartItems"
      :key="item.competitionId"
    >
      <v-col>
        <p>{{ item.competitionName }} - £{{ item.ticketPrice }} each</p>
        <p>Quantity: {{ item.quantity }}</p>
      </v-col>
    </v-row>
    <p>Total: £{{ cartTotal }}</p>
  
    <h3>Payment Details</h3>
    <v-form>
      <div id="card-element" />
    </v-form>
  
    <v-btn
      color="primary"
      @click="completePurchase"
    >
      Complete Purchase
    </v-btn>
  </v-container>
</template>
  
  <script>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import axios from 'axios';
  
  export default {
    setup() {
      const store = useStore();
      const cartItems = computed(() => store.getters.cartItems);
      const cartTotal = computed(() => store.getters.cartTotal);
  
      let stripe;
      let elements;
      let cardElement;

        const cardStyle = {
            style: {
                base: {
                    fontSize: '16px',
                    color: '#32325d',
                },
            },
        };

      onMounted(() => {
        stripe = window.Stripe('pk_test_51QNgjNABrqpmR6Y5a7Ak0AX1nED13vitWIDuY4irZhnQ5DhqtI3CxZCQEJvJe724qHAXrA7uNeE6fzUAOSm6LMy400LA3zLZ8u');
        elements = stripe.elements();
        cardElement = elements.create('card', {
            style: cardStyle,
            hidePostalCode: true,
        });      
        cardElement.mount('#card-element'); 
      });
  
      const completePurchase = async () => {
        try {
          const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/payment-intent`, {
            amount: cartTotal.value * 100,
          });
  
          const clientSecret = response.data.clientSecret;
  
          const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: 'John Doe' // You can get this from a form field or user data
              }
            }
          });
  
          if (error) {
            alert(error.message);
            return;
          }
  
          // Step 4: If payment is successful, send order details to backend
          if (paymentIntent.status === 'succeeded') {
            const orderResponse = await axios.post(`${process.env.VUE_APP_API_URL}/api/orders`, {
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
  
      return { cartItems, cartTotal, completePurchase };
    }
  };
  </script>
  
  <style scoped>
  /* Optional styling for the card element */
  #card-element {
    width: 100%;
    height: 40px;
    background: #f7f7f7;
    padding: 10px;
    border-radius: 5px;
  }
  </style>
  