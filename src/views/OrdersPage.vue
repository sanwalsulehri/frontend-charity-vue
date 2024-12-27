<template>
<Sidebar>
  <div class="">
    <div class="mx-auto max-w-2xl pt-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="space-y-2 px-4 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 sm:px-0">
        <div class="flex sm:items-baseline sm:space-x-4">
          <h1 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">Recent Orders</h1>
          <a href="#" class="hidden text-sm font-medium text-yellow-600 hover:text-yellow-500 sm:block">
            View
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>


        <a href="#" class="text-sm font-medium text-yellow-600 hover:text-yellow-500 sm:hidden">
          View invoice
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <!-- Products -->
      <div class="mt-6">
        <h2 class="sr-only">Products purchased</h2>

        <div class="space-y-8">
          <div v-for="{ id, total_price, status, created_at } in orders" :key="id"
            class=" bg-gray-800 ring-1 ring-yellow-600 shadow-xs sm:rounded-lg ">
            <div class="px-4 py-8 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
              <div class="sm:flex lg:col-span-7">
                <!-- <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full shrink-0 rounded-lg object-cover sm:size-40" /> -->

                <div class="mt-6 sm:mt-0 flex justify-between items-center w-full gap-2 sm:ml-6">
                  <h3 class="text-base font-medium text-white">
                    <p>Order Id: {{ id }}</p>
                  </h3>
                  <p class=" text-sm font-medium text-white">Price: ${{ total_price }}</p>
                  <p :style="'color:' + getStatusColor(status)" class=" text-sm text-gray-400">Status: {{ status }} </p>
                  <p class=" text-sm text-gray-400">Date: {{ formatDate(created_at) }}</p>

                </div>
              </div>


            </div>

          </div>
        </div>
      </div>

      <!-- Billing -->

    </div>
  </div>
  </Sidebar>
  <!-- <v-card>
    <v-card-title>Recent Orders</v-card-title>
    <v-data-table
      :headers="headers"
      :items="orders"
      item-key="id"
      :loading="loading"
      class="elevation-1 custom-table"
    >
      <template #[`item.status`]="{ item }">
        <v-chip
          :color="getStatusColor(item.status)"
          dark
        >
          {{ item.status }}
        </v-chip>
      </template>
      <template #[`item.created_at`]="{ item }">
        <span>{{ formatDate(item.created_at) }}</span>
      </template>
    </v-data-table>
  </v-card> -->
</template>
  
<script setup>
 
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Sidebar from '@/layout/Sidebar.vue';

// Data variables
const orders = ref([]);
const loading = ref(true);


// Fetch Orders
const fetchOrders = async () => {
  try {
    const response = await axios.get(`http://35.179.142.94:8000/api/user/orders`);
    orders.value = response.data;
  } catch (error) {
    console.error('There was an error fetching the orders:', error);
  } finally {
    loading.value = false;
  }
};

// Status color function
const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return 'yellow';
    case 'active':
      return 'yellow';
    case 'deleted':
      return 'red';
    default:
      return 'blue';
  }
};

// Format date function
const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};


// Fetch orders on component mount
onMounted(() => {
  fetchOrders();
});





</script>

  
<style scoped>
.custom-table th {
  color: #000;
  /* Black text color */
  font-weight: bold;
  background-color: #f5f5f5;
  /* Light background for visibility */
}</style>