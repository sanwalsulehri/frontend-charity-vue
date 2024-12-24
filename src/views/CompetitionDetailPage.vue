<template>
  <Navbar />
  <div v-if="competition" class="max-w-7xl mx-auto px-8">
    <img :src="competitionImage" alt="Competition Image">
    <i>{{'http://35.179.142.94:8000/storage/'+ competition.image_location}}</i>
    <pre>{{competition}}</pre>
  </div>
  <!-- <v-container v-if="competition">
   
    <v-card>
      <v-img
        :src="getImagePath(competition.image_location)"
        alt="Competition Image"
        height="300px"
      />
      <v-card-title>{{ competition.name }}</v-card-title>
      <v-card-subtitle>{{ competition.description }}</v-card-subtitle>
      <v-card-text>
        <div>Status: {{ competition.status }}</div>
        <div>Ticket Pool: {{ competition.ticket_pool }}</div>
        <div>Ticket Price: £{{ competition.ticket_price }}</div>
      </v-card-text>
      <v-text-field
        v-model="quantity"
        label="Ticket Quantity"
        type="number"
      />
      <v-btn
        color="primary"
        @click="addToCart"
      >
        Add to Cart
      </v-btn>
    </v-card>
  </v-container> -->
  <div v-else>
    Loading competition details...
  </div>
</template>
  
  <script>
  import axios from 'axios';
  import Navbar from '../components/Navbar.vue';
  
  export default {
    name: 'CompetitionDetailPage',
    components: {
      Navbar
    },
    data() {
      return {
        competition: {},
        quantity: 1,
        competitionImage: '',
        
      };
    },
    mounted() {
      this.fetchCompetition();
    },
    methods: {
        addToCart() {
          
        const competition = this.competition;
        this.$store.commit('addToCart', {
            competitionId: competition.id,
            competitionName: competition.name,
            ticketPrice: competition.ticket_price,
            quantity: this.quantity
        });
    },

      async fetchCompetition() {
        try {
          const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/competition/${this.$route.params.id}`);
          this.competition = response.data.competition;
        } catch (error) {
          console.error("Error fetching competition details:", error);
        }
      },
      getImagePath(image) {
        return `${process.env.VUE_APP_API_URL}/storage/${image}`;
      }
    },
    watch: {
        'competition.image_location': {
            immediate: true,
            handler(newValue) {
                if (newValue) {
                    this.competitionImage = this.getImagePath(newValue);
                }
            }
        }
    }
  };
  </script>
  
  <style scoped>
  .v-card {
    margin-top: 20px;
  }
  </style>
  