<template>
    <v-container>
      <!-- Registration Form -->
      <v-form v-if="isRegistering" @submit.prevent="register">
        <v-text-field v-model="form.name" label="Name" :rules="[rules.required]" required />
        <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" required />
        <v-text-field v-model="form.street_address" label="Street Address" :rules="[rules.required, ]" required />
        <v-text-field v-model="form.town_city" label="Town/city" :rules="[rules.required, ]" required />
        <v-text-field v-model="form.postcode" label="Postcode" :rules="[rules.required, ]" required />
        <v-text-field v-model="form.phone" label="Phone" :rules="[rules.required, ]" required />

        <v-text-field
          v-model="form.password"
          label="Password"
          type="password"
          :rules="[rules.required]"
          required
        />
        <v-text-field
          v-model="form.confirmPassword"
          label="Confirm Password"
          type="password"
          :rules="[rules.required]"
          required
        />
        <v-btn color="primary" type="submit" :disabled="isSubmitting">Register</v-btn>
      </v-form>
  
      <!-- Login Form -->
      <v-form v-else @submit.prevent="login">
        <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" required />
        <v-text-field v-model="form.password" label="Password" type="password" :rules="[rules.required]" required />
        <v-btn color="primary" type="submit" :disabled="isSubmitting">Login</v-btn>
      </v-form>
  
      <v-btn text @click="toggleForm">{{ isRegistering ? 'Already have an account? Login' : 'Don\'t have an account? Register' }}</v-btn>
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  
  export default {
    name: "LoginPage",
    setup() {
      const router = useRouter();
      const store = useStore(); // Access Vuex store
  
      // Define form state
      const form = ref({
        name: "",
        email: "",
        street_address: "",
        town_city: "",
        postcode: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
  
      // Define form submission state
      const isSubmitting = ref(false);
  
      // Toggle between login and registration forms
      const isRegistering = ref(true);
  
      // Validation rules
      const rules = {
        required: value => !!value || "This field is required",
        email: value => /.+@.+\..+/.test(value) || "Please enter a valid email address",
      };
  
      // Handle registration
      const register = async () => {
        if (form.value.password !== form.value.confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
  
        isSubmitting.value = true;
        try {
          const { name, email, street_address, town_city, postcode, phone, password} = form.value;
          await axios.post(`${process.env.VUE_APP_API_URL}/api/register`, {
            name,
            email,
            password,
            street_address,
            town_city,
            postcode,
            phone
          });
  
          alert("Registration successful!");
          // Automatically log in after registration
          login();
        } catch (error) {
          alert("Registration failed: " + error.response?.data?.message || error.message);
        } finally {
          isSubmitting.value = false;
        }
      };
  
      // Handle login
      const login = async () => {
        isSubmitting.value = true;
        try {
          const { email, password } = form.value;
          const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/api/login`, {
            email,
            password,
          });
  
          if (data?.token) {
            // Store token in Vuex and localStorage
            store.dispatch("login", data.token);
            router.push("/"); // Redirect to home
          } else {
            alert("Login failed: Token not received.");
          }
        } catch (error) {
          alert("Login failed: " + error.response?.data?.message || error.message);
        } finally {
          isSubmitting.value = false;
        }
      };
  
      // Toggle between the forms
      const toggleForm = () => {
        isRegistering.value = !isRegistering.value;
        form.value = { name: "", email: "", password: "", confirmPassword: "" }; // Reset form
      };
  
      return {
        form,
        isRegistering,
        isSubmitting,
        rules,
        register,
        login,
        toggleForm,
      };
    },
  };
  </script>
  