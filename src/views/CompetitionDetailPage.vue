<template>
    <v-container v-if="competition">
      <v-card>
        <v-img :src="getImagePath(competition.image_location)" alt="Competition Image" height="300px" />
        <v-card-title>{{ competition.name }}</v-card-title>
        <v-card-subtitle>{{ competition.description }}</v-card-subtitle>
        <v-card-text>
          <div>Status: {{ competition.status }}</div>
          <div>Ticket Pool: {{ competition.ticket_pool }}</div>
          <div>Ticket Price: £{{ competition.ticket_price }}</div>
        </v-card-text>
        <v-text-field v-model="quantity" label="Ticket Quantity" type="number" />
        <v-btn color="primary" @click="addToCart">Add to Cart</v-btn>
      </v-card>
    </v-container>
    <div v-else>Loading competition details...</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CompetitionDetailPage',
    data() {
      return {
        competition: null,
        quantity: 1
      };
    },
    methods: {
        addToCart() {
        const competition = this.competition; // Assuming competition data is fetched here
        this.$store.commit('addToCart', {
            competitionId: competition.id,
            competitionName: competition.name,
            ticketPrice: competition.ticket_price,
            quantity: this.quantity
        });
    },
      async fetchCompetition() {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/competition/${this.$route.params.id}`);
          this.competition = response.data;
        } catch (error) {
          console.error("Error fetching competition details:", error);
        }
      },
      getImagePath(image) {
        return require(`@/assets/${image}`);
      }
    },
    mounted() {
      this.fetchCompetition();
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-top: 20px;
  }
  </style>
  