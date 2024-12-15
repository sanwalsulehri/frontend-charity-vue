<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <!-- Sidebar -->
        <v-navigation-drawer app>
          <v-list dense>
            <v-list-item @click="goToOrders">
              <v-list-item-content>
                <v-list-item-title>Orders</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="goToProfile">
              <v-list-item-content>
                <v-list-item-title>Edit Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link @click="logout">
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-navigation-drawer>
      </v-col>

      <v-col cols="12" md="9">
        <!-- Profile Information Section -->
        <v-card v-if="currentPage === 'profile'">
          <v-card-title>Edit Profile</v-card-title>
          <v-form v-model="valid" ref="form">
            <v-text-field
              v-model="user.name"
              label="Name"
              :rules="[rules.required]"
              :disabled="!editing"
            ></v-text-field>

            <v-text-field
              v-model="user.email"
              label="Email"
              :rules="[rules.required, rules.email]"
              :disabled="!editing"
            ></v-text-field>

            <v-text-field
              v-model="user.street_address"
              label="Street Address"
              :disabled="!editing"
            ></v-text-field>

            <v-text-field
              v-model="user.town_city"
              label="Town/City"
              :disabled="!editing"
            ></v-text-field>

            <v-text-field
              v-model="user.postcode"
              label="Postcode"
              :disabled="!editing"
            ></v-text-field>

            <v-text-field
              v-model="user.phone"
              label="Phone"
              :disabled="!editing"
            ></v-text-field>

            <!-- Edit/Save Buttons -->
            <v-btn @click="toggleEdit" color="primary" v-if="!editing">Edit</v-btn>
            <v-btn @click="saveProfile" color="success" :disabled="!valid" v-if="editing">Save</v-btn>
          </v-form>
        </v-card>

        <!-- Orders Information Section -->
        <orders-page v-if="currentPage === 'orders'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import OrdersPage from './OrdersPage.vue';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        street_address: '',
        town_city: '',
        postcode: '',
        phone: '',
      },
      valid: true,
      editing: false,
      currentPage: 'profile', // Tracks the current page (profile or orders)
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
      },
    };
  },
  components: {
    OrdersPage,
  },
  mounted() {
    this.fetchUserProfile();
  },
  methods: {
    fetchUserProfile() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/api/user/profile`)
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          console.error('There was an error fetching the profile:', error);
        });
    },
    toggleEdit() {
      this.editing = !this.editing;
    },
    saveProfile() {
      axios
        .put(`${process.env.VUE_APP_API_URL}/api/user/profile`, this.user)
        .then(() => {
          this.editing = false;
          alert('Profile updated successfully');
        })
        .catch((error) => {
          console.error('There was an error updating the profile:', error);
        });
    },
    goToOrders() {
      this.currentPage = 'orders';
    },
    goToProfile() {
      this.currentPage = 'profile';
    },
    logout() {

      localStorage.removeItem('auth_token');

      this.$store.dispatch('logout');

      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.v-container {
  margin-top: 20px;
}
</style>
