<template>
  <v-card>
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
  </v-card>
</template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orders: [],
        loading: true,
        headers: [
          { title: 'Order ID', align: 'start', key: 'id' },
          { title: 'Date', align: 'start', key: 'created_at' },
          { title: 'Total Price', align: 'start', key: 'total_price' },
          { title: 'Status', align: 'start', key: 'status' },
        ],
      };
    },
    mounted() {
      this.fetchOrders();
    },
    methods: {
      fetchOrders() {
        axios.get(`${process.env.VUE_APP_API_URL}/api/user/orders`)
          .then(response => {
            this.orders = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error("There was an error fetching the orders:", error);
            this.loading = false;
          });
      },
      getStatusColor(status) {
        switch (status) {
          case 'pending': return 'orange';
          case 'active': return 'green';
          case 'deleted': return 'red';
          default: return 'blue';
        }
      },
      formatDate(date) {
        return new Date(date).toLocaleDateString();
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-table th {
    color: #000; /* Black text color */
    font-weight: bold;
    background-color: #f5f5f5; /* Light background for visibility */
  }
  </style>