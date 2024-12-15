<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="elevation-1">
            <v-card-title>User Profile</v-card-title>
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field label="Name" :value="userProfile.name" readonly />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field label="Email" :value="userProfile.email" readonly />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field label="Street Address" :value="userProfile.street_address" readonly />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field label="Town/City" :value="userProfile.town_city" readonly />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field label="Postcode" :value="userProfile.postcode" readonly />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field label="Phone" :value="userProfile.phone" readonly />
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { ref, watch } from "vue";
  import axios from "axios";
  
  export default {
    name: "UserProfileAdmin",
    props: {
      userId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const userProfile = ref({
        name: "",
        email: "",
        street_address: "",
        town_city: "",
        postcode: "",
        phone: "",
      });
  
      const fetchUserProfile = async (userId) => {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/user/profile/${userId}`
          );
          userProfile.value = response.data;
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
        }
      };
  
      // Watch the userId prop to fetch user details whenever it changes
      watch(
        () => props.userId,
        (newUserId) => {
          if (newUserId) {
            fetchUserProfile(newUserId);
          }
        },
        { immediate: true }
      );
  
      return {
        userProfile,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  