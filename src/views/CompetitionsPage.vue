<template>
    <v-container>
        <p>test</p>
      <v-row>
        <v-col v-for="competition in competitions" :key="competition.id" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src=getImagePath(competition.image_location) alt="Competition Image" height="200px" />
            <v-card-title>{{ competition.name }}</v-card-title>
            <v-card-subtitle>{{ competition.description }}</v-card-subtitle>
            <v-card-text>
              <div>Ticket Price: £{{ competition.ticket_price || 'N/A' }}</div>
              <div>Status: {{ competition.status }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="viewCompetition(competition.id)">View Competition</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CompetitionsPage',
    data() {
      return {
        competitions: []
      };
    },
    methods: {
        getImagePath(image) {
            return require(`@/assets/${image}`);
        },
      async fetchCompetitions() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/competitions');
          this.competitions = response.data;
        } catch (error) {
          console.error("Error fetching competitions:", error);
        }
      },
      viewCompetition(id) {
        this.$router.push(`/competition/${id}`);
      }
    },
    mounted() {
      this.fetchCompetitions();
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-bottom: 20px;
  }
  </style>
  