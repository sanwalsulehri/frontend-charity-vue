<template>
  <div>
      <Navbar />
      <div class="">
  <div class="mx-auto max-w-2xl px-4 pt-16 pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Checkout</h2>

    <form @submit.prevent="completePurchase" class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
      <div>
         

       

        

        <!-- Payment -->
        <div class="mt-10 borderT pt-10">
          <h2 class="text-lg font-medium text-white">Payment</h2>

          <!-- Replace the manual card inputs with Stripe Element -->
          <div class="mt-6">
            <label class="block text-sm/6 font-medium text-gray-300">Card details</label>
            <div id="card-element" class="mt-2 text-white block w-full rounded-md inputBorder bg-gray-800 px-3 py-4" />
            <div id="card-errors" class="mt-2 text-sm text-red-500" />
          </div>
        </div>
      </div>

     
      <!-- Order summary -->
      <div class="mt-10 lg:mt-0">
        <h2 class="text-lg font-medium text-white">Order summary</h2>

        <div class="mt-4 rounded-lg border border-gray-200 bg-white/5 backdrop-blur-3xl shadow-xs">
          <h3 class="sr-only">Items in your cart</h3>
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="product in cartItems" :key="product.competitionId" class="flex px-4 py-6 sm:px-6">
               

              <div class="ml-6 flex flex-1 flex-col">
                <div class="flex">
                  <div class="min-w-0 flex-1">
                    <h4 class="text-sm">
                      <a :href="product.href" class="font-medium text-gray-300 hover:text-gray-400">{{ product.competitionName }}</a>
                    </h4> 
                  </div>

                
                </div>

                <div class="flex flex-1 items-end justify-between pt-2">
                  <p class="mt-1 text-sm font-medium text-white">{{ product.ticketPrice }}</p>

                  <div class="ml-4">
                    <div class="grid grid-cols-1">
                      <select v-model="product.quantity" id="quantity" name="quantity" aria-label="Quantity" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600 borders sm:text-sm/6">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          
          <div class="px-6 py-12">
          
            <h1 class="text-2xl font-semibold">User Information:</h1>
            <h1 class="text-xl">Name:  <span class="underline">{{user.name}}</span></h1>
            <h1 class="text-xl">Email: {{user.email}}</h1>
            <h1 class="text-xl">Address: {{user.street_address}}</h1>
            <h1 class="text-xl">Town City: {{user.town_city}}</h1>
            <h1 class="text-xl">Postcode: {{user.postcode}}</h1>
            <h1 class="text-xl">Phone: {{user.phone}}</h1>
            <router-link class="text-yellow-500 underline" to="/user">Change Billing Info here</router-link>
          </div>
          

          <div class="borderT px-4 py-6 sm:px-6">
            <button type="submit" class="w-full rounded-md border border-transparent bg-yellow-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden">{{completedLoading ? 'Paying...' : 'Confirm order' }} {{cartTotal}}$</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
      <Footer />
  </div>

  <!--This is old code-->
<!-- <v-container>
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
</v-container> -->
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid'; 
import { useRouter } from 'vue-router';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


// Vuex Store
const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
const cartTotal = computed(() => store.getters.cartTotal);

const authToken = computed(() => store.getters.authToken);
const router = useRouter();

// Stripe Variables
let stripe;
let elements;
let cardElement;

// Stripe Card Style
const cardStyle = {
style: {
  base: {
    fontSize: '16px',
    color: '#ffffff',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    '::placeholder': {
      color: '#6b7280',
    },
    backgroundColor: 'transparent',
    iconColor: '#ffffff',
    ':-webkit-autofill': {
      color: '#ffffff',
    },
    ':-webkit-autofill-selected': {
      color: '#ffffff',
    },
  },
  invalid: {
    color: '#dc2626',
    iconColor: '#dc2626'
  }
},
};
const completedLoading = ref(false);


const user = ref({});
const fetchUserProfile = async () => {
  try {
   
    const response = await axios.get(`http://35.179.142.94:8000/api/user/profile`);
    console.log(response.data,'user')
    user.value = response.data;
  } catch (error) {
    console.error('There was an error fetching the profile:', error);
  }
};

// Stripe Initialization
onMounted(() => {
  fetchUserProfile();
stripe = window.Stripe('pk_test_51QNgjNABrqpmR6Y5a7Ak0AX1nED13vitWIDuY4irZhnQ5DhqtI3CxZCQEJvJe724qHAXrA7uNeE6fzUAOSm6LMy400LA3zLZ8u');
elements = stripe.elements({
  appearance: {
    theme: 'night',
    variables: {
      colorPrimary: '#059669',
      colorBackground: '#1f2937',
      colorText: '#ffffff',
      colorDanger: '#dc2626',
    }
  }
});
cardElement = elements.create('card', {
  style: cardStyle,
  hidePostalCode: true,
});
cardElement.mount('#card-element');
});

// Complete Purchase
const completePurchase = async (e) => {
e.preventDefault();

if (!store.getters.isLoggedIn) {
  alert('Please log in to complete your purchase');
  return;
}
completedLoading.value = true;

try {
  // Add auth header to payment intent request
  const response = await axios.post(`http://35.179.142.94:8000/api/payment-intent`, 
    {
      amount: cartTotal.value * 100,
    },
    {
      headers: {
        'Authorization': `Bearer ${authToken.value}`
      }
    }
  );

  const clientSecret = response.data.clientSecret;

  const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: cardElement,
      billing_details: {
        name: 'John Doe', // Replace with actual user data
      },
    },
  });

  if (error) {
    alert(error.message);
    completedLoading.value = false;
    router.push('/sorry');

    return;
  }

  if (paymentIntent.status === 'succeeded') {
    // Add auth header to order creation request
    const orderResponse = await axios.post(`http://35.179.142.94:8000/api/orders`,
      {
        cart: cartItems.value,
        paymentIntentId: paymentIntent.id,
      },
      {
        headers: {
          'Authorization': `Bearer ${authToken.value}`
        }
      }
    );

    completedLoading.value = false;
    store.commit('clearCart');
    alert('Purchase completed successfully!');
    Toastify({
    text: "Order Placed Successfully!",
    duration: 5000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "#111827",
      color: "#FFFFFF",      
      borderRadius: "8px",
      padding: "12px 16px",
      border: "1px solid #374151",
      animation: "jumpIn 0.5s ease-out, jumpOut 0.5s ease-out 4.5s",
    },
  }).showToast();
    router.push('/thanks');
    console.log(orderResponse.data);
  } else {
    alert('Payment failed. Please try again.');
    completedLoading.value = false;
    router.push('/sorry');
  }
} catch (error) {
  console.error('Error completing purchase:', error);
  if (error.response?.status === 401) {
    alert('Your session has expired. Please log in again.');
    store.dispatch('logout');
    // Optionally redirect to login page
  } else {
    alert('Failed to complete purchase. Please try again.');
  }
  completedLoading.value = false;
}
};
</script>
  
  <style scoped>
  /* Optional styling for the card element */
  #card-element {
    width: 100%;
    height: 40px;
    background: #f7f7f7;
 
    border-radius: 5px;
  }

  .inputBorder{
      border: 1px solid #49505A;
    }
   


.borders {
  border: 1px solid #059669;
}
  </style>
  