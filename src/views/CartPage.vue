<template>
  <div class="relative">
    <Navbar />
 
    <div
      class="absolute inset-x-0  -top-16 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
    
      <div
        class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>



    <div class="bg-transparent z-[999]" >
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl ">Shopping Cart</h1>
      <form  class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16" >
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          <ul    role="list" class="divide-y space-y-4 divide-emerald-500 border-b border-t border-emerald-500">
            <li v-for="(product, productIdx) in cartItems" :key="product.competitionId" class="flex ring-1 rounded-sm ring-emerald-500 py-6 sm:py-10">
              <div class="shrink-0">
                <!-- <img :src="product.imageSrc" :alt="product.imageAlt" class="size-24 rounded-md object-cover sm:size-48" /> -->
              </div>

              <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a :href="product.href" class="font-medium text-2xl text-gray-300  ">{{ product.competitionName }}</a>
                      </h3>
                    </div>
                    
                    <p class="mt-1 text-sm font-medium text-gray-900 underline text-white">{{ product.ticketPrice }}</p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <div class="grid w-full max-w-16 grid-cols-1">
                      <select :name="`quantity-${productIdx}`" :aria-label="`Quantity, ${product.name}`" class="col-start-1 row-start-1 appearance-none rounded-md bg-white/5 backdrop-blur-3xl py-1.5 pl-3 pr-8 text-base text-white outline outline-1 -outline-offset-1 outline-emerald-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:ring-emerald-500 sm:text-sm/6">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                      <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-white fill-white sm:size-4"/>
                    </div>

                    <div class="absolute right-4 top-0">
                      <button type="button" class="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Remove</span>
                        <XMarkIcon class="size-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

              
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section  aria-labelledby="summary-heading" class="mt-16 rounded-lg bg-white/5 backdrop-blur-3xl px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 id="summary-heading" class="text-lg font-semibold text-white ">Order summary</h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-300">Subtotal</dt>
              <dd class="text-sm font-medium text-gray-300">$99.00</dd>
            </div>
            <div class="flex items-center justify-between border-t-[1px] border-emerald-500  pt-4">
              <dt class="flex items-center text-sm text-gray-300">
                <span>Shipping estimate</span>
                <a href="#" class="ml-2 shrink-0 text-gray-300 hover:text-gray-500">
                  <span class="sr-only">Learn more about how shipping is calculated</span>
                  <QuestionMarkCircleIcon class="size-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-300">$5.00</dd>
            </div>
            <div class="flex items-center justify-between border-t-[1px] border-emerald-500 pt-4">
              <dt class="flex text-sm text-gray-300">
                <span>Tax estimate</span>
                <a href="#" class="ml-2 shrink-0 text-gray-300 hover:text-gray-500">
                  <span class="sr-only">Learn more about how tax is calculated</span>
                  <QuestionMarkCircleIcon class="size-5" aria-hidden="true" />
                </a>
              </dt>
              <dd class="text-sm font-medium text-gray-300">$8.32</dd>
            </div>
            <div class="flex items-center justify-between border-t-[1px] border-emerald-500 pt-4">
              <dt class="text-base font-medium text-gray-300">Order total</dt>
              <dd  class="text-base font-medium text-gray-300">$112.32{{ cartTotal }}</dd>
            </div>
          </dl>

          <div class="mt-6">
            <button  @click="checkout" type="submit" class="w-full rounded-md border border-transparent bg-emerald-500 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
          </div>
        </section>
      </form>
    </div>
  </div>

  </div>



  <v-container>
    <h2>Your Cart</h2>
    <v-row
      v-for="item in cartItems"
      :key="item.competitionId"
    >
      <v-col>
        <p>{{ item.competitionName }} - £{{ item.ticketPrice }} each</p>
        <v-text-field
          v-model="item.quantity"
          type="number"
          label="Quantity"
          @input="updateCart(item)"
        />
        <v-btn @click="removeFromCart(item.competitionId)">
          Remove
        </v-btn>
      </v-col>
    </v-row>
    <p>Total: £{{ cartTotal }}</p>
    <v-btn
      color="primary"
      @click="checkout"
    >
      Checkout
    </v-btn>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Navbar from '@/components/Navbar.vue';

const store = useStore(); // Access the Vuex store
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

import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import { QuestionMarkCircleIcon, XMarkIcon } from '@heroicons/vue/20/solid'


</script>

  