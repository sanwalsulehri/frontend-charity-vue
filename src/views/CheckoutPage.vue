<template>
    <div>
        <Navbar />
        <div class="">
    <div class="mx-auto max-w-2xl px-4 pt-16 pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Checkout</h2>

      <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div>
          <div>
            <h2 class="text-lg font-medium text-white">Contact information</h2>

            <div class="mt-4">
              <label for="email-address" class="block text-sm/6 font-medium text-gray-300">Email address</label>
              <div classe="mt-2">
                <input type="email" id="email-address" name="email-address" autocomplete="email" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
              </div>
            </div>
          </div>

          <div class="mt-10 borderT  pt-10">
            <h2 class="text-lg font-medium text-white">Shipping information</h2>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label for="first-name" class="block text-sm/6 font-medium text-gray-300">First name</label>
                <div class="mt-2">
                  <input type="text" id="first-name" name="first-name" autocomplete="given-name" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="last-name" class="block text-sm/6 font-medium text-gray-300">Last name</label>
                <div class="mt-2">
                  <input type="text" id="last-name" name="last-name" autocomplete="family-name" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="company" class="block text-sm/6 font-medium text-gray-300">Company</label>
                <div class="mt-2">
                  <input type="text" name="company" id="company" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="address" class="block text-sm/6 font-medium text-gray-300">Address</label>
                <div class="mt-2">
                  <input type="text" name="address" id="address" autocomplete="street-address" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="apartment" class="block text-sm/6 font-medium text-gray-300">Apartment, suite, etc.</label>
                <div class="mt-2">
                  <input type="text" name="apartment" id="apartment" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="city" class="block text-sm/6 font-medium text-gray-300">City</label>
                <div class="mt-2">
                  <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="country" class="block text-sm/6 font-medium text-gray-300">Country</label>
                <div class="mt-2 grid grid-cols-1">
                  <select id="country" name="country" autocomplete="country-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                </div>
              </div>

              <div>
                <label for="region" class="block text-sm/6 font-medium text-gray-300">State / Province</label>
                <div class="mt-2">
                  <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="postal-code" class="block text-sm/6 font-medium text-gray-300">Postal code</label>
                <div class="mt-2">
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="phone" class="block text-sm/6 font-medium text-gray-300">Phone</label>
                <div class="mt-2">
                  <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 borderT pt-10">
            <fieldset>
              <legend class="text-lg font-medium text-white">Delivery method</legend>
              <RadioGroup v-model="selectedDeliveryMethod" class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <RadioGroupOption as="template" v-for="deliveryMethod in deliveryMethods" :key="deliveryMethod.id" :value="deliveryMethod" :aria-label="deliveryMethod.title" :aria-description="`${deliveryMethod.turnaround} for ${deliveryMethod.price}`" v-slot="{ active, checked }">
                  <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-emerald-500' : '', 'relative flex cursor-pointer rounded-lg border bg-gray-800 p-4 shadow-xs focus:outline-hidden']">
                    <span class="flex flex-1">
                      <span class="flex flex-col">
                        <span class="block text-sm font-medium text-white">{{ deliveryMethod.title }}</span>
                        <span class="mt-1 flex items-center text-sm text-gray-500">{{ deliveryMethod.turnaround }}</span>
                        <span class="mt-6 text-sm font-medium text-white">{{ deliveryMethod.price }}</span>
                      </span>
                    </span>
                    <CheckCircleIcon v-if="checked" class="size-5 text-emerald-600" aria-hidden="true" />
                    <span :class="[active ? 'border' : 'border-2', checked ? 'border-emerald-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                  </div>
                </RadioGroupOption>
              </RadioGroup>
            </fieldset>
          </div>

          <!-- Payment -->
          <div class="mt-10 borderT pt-10">
            <h2 class="text-lg font-medium text-white">Payment</h2>

            <fieldset class="mt-4">
              <legend class="sr-only">Payment type</legend>
              <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                <div v-for="(paymentMethod, paymentMethodIdx) in paymentMethods" :key="paymentMethod.id" class="flex items-center">
                  <input :id="paymentMethod.id" name="payment-type" type="radio" :checked="paymentMethodIdx === 0" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-gray-800 before:absolute before:inset-1 before:rounded-full before:bg-gray-800 not-checked:before:hidden checked:border-emerald-600 checked:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                  <label :for="paymentMethod.id" class="ml-3 block text-sm/6 font-medium text-gray-300">{{ paymentMethod.title }}</label>
                </div>
              </div>
            </fieldset>

            <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
              <div class="col-span-4">
                <label for="card-number" class="block text-sm/6 font-medium text-gray-300">Card number</label>
                <div class="mt-2">
                  <input type="text" id="card-number" name="card-number" autocomplete="cc-number" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="col-span-4">
                <label for="name-on-card" class="block text-sm/6 font-medium text-gray-300">Name on card</label>
                <div class="mt-2">
                  <input type="text" id="name-on-card" name="name-on-card" autocomplete="cc-name" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="col-span-3">
                <label for="expiration-date" class="block text-sm/6 font-medium text-gray-300">Expiration date (MM/YY)</label>
                <div class="mt-2">
                  <input type="text" name="expiration-date" id="expiration-date" autocomplete="cc-exp" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <label for="cvc" class="block text-sm/6 font-medium text-gray-300">CVC</label>
                <div class="mt-2">
                  <input type="text" name="cvc" id="cvc" autocomplete="csc" class="block w-full rounded-md inputBorder  bg-gray-800 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order summary -->
        <div class="mt-10 lg:mt-0">
          <h2 class="text-lg font-medium text-white">Order summary</h2>

          <div class="mt-4 rounded-lg border border-gray-200 bg-white/5 backdrop-blur-3xl shadow-xs">
            <h3 class="sr-only">Items in your cart</h3>
            <ul role="list" class="divide-y divide-gray-200">
              <li v-for="product in products" :key="product.id" class="flex px-4 py-6 sm:px-6">
                <div class="shrink-0">
                  <img :src="product.imageSrc" :alt="product.imageAlt" class="w-20 rounded-md" />
                </div>

                <div class="ml-6 flex flex-1 flex-col">
                  <div class="flex">
                    <div class="min-w-0 flex-1">
                      <h4 class="text-sm">
                        <a :href="product.href" class="font-medium text-gray-300 hover:text-gray-400">{{ product.title }}</a>
                      </h4>
                      <p class="mt-1 text-sm text-gray-400">{{ product.color }}</p>
                      <p class="mt-1 text-sm text-gray-400">{{ product.size }}</p>
                    </div>

                    <div class="ml-4 flow-root shrink-0">
                      <button type="button" class="-m-2.5 flex items-center justify-center bg-gray-800 p-2.5 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Remove</span>
                        <TrashIcon class="size-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-1 items-end justify-between pt-2">
                    <p class="mt-1 text-sm font-medium text-white">{{ product.price }}</p>

                    <div class="ml-4">
                      <div class="grid grid-cols-1">
                        <select id="quantity" name="quantity" aria-label="Quantity" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 borders sm:text-sm/6">
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
            <dl class="space-y-6 borderT px-4 py-6 sm:px-6">
              <div class="flex items-center justify-between">
                <dt class="text-sm">Subtotal</dt>
                <dd class="text-sm font-medium text-white">$64.00</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Shipping</dt>
                <dd class="text-sm font-medium text-white">$5.00</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Taxes</dt>
                <dd class="text-sm font-medium text-white">$5.52</dd>
              </div>
              <div class="flex items-center justify-between borderT pt-6">
                <dt class="text-base font-medium">Total</dt>
                <dd class="text-base font-medium text-white">$75.52</dd>
              </div>
            </dl>

            <div class="borderT px-4 py-6 sm:px-6">
              <button type="submit" class="w-full rounded-md border border-transparent bg-emerald-600 px-4 py-3 text-base font-medium text-white shadow-xs hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden">Confirm order</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
        <Footer />
    </div>
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
  
<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';
import { RadioGroup, RadioGroupOption } from '@headlessui/vue';
import { CheckCircleIcon, TrashIcon } from '@heroicons/vue/20/solid';

// Dummy Data
const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];

const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
];

const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
];

const selectedDeliveryMethod = ref(deliveryMethods[0]);

// Vuex Store
const store = useStore();
const cartItems = computed(() => store.getters.cartItems);
const cartTotal = computed(() => store.getters.cartTotal);

// Stripe Variables
let stripe;
let elements;
let cardElement;

// Stripe Card Style
const cardStyle = {
  style: {
    base: {
      fontSize: '16px',
      color: '#32325d',
    },
  },
};

// Stripe Initialization
onMounted(() => {
  stripe = window.Stripe('pk_test_51QNgjNABrqpmR6Y5a7Ak0AX1nED13vitWIDuY4irZhnQ5DhqtI3CxZCQEJvJe724qHAXrA7uNeE6fzUAOSm6LMy400LA3zLZ8u');
  elements = stripe.elements();
  cardElement = elements.create('card', {
    style: cardStyle,
    hidePostalCode: true,
  });
  cardElement.mount('#card-element');
});

// Complete Purchase
const completePurchase = async () => {
  try {
    const API_URL = import.meta.env.VITE_API_URL; // Update environment variable
    const response = await axios.post(`${API_URL}/api/payment-intent`, {
      amount: cartTotal.value * 100,
    });

    const clientSecret = response.data.clientSecret;

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'John Doe', // Replace with actual form field or user data
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      const orderResponse = await axios.post(`${API_URL}/api/orders`, {
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

  .inputBorder{
      border: 1px solid #49505A;
    }
    .borderT {
  border-top: 1px solid #059669;
}


.borders {
  border: 1px solid #059669;
}
  </style>
  