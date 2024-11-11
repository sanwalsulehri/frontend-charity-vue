<template>
    <v-container>
      <!-- Registration Form -->
      <v-form v-if="isRegistering" @submit.prevent="register">
        <v-text-field v-model="form.name" label="Name" :rules="[rules.required]" required />
        <v-text-field v-model="form.email" label="Email" :rules="[rules.required, rules.email]" required />
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
    import { ref } from "vue";
    import axios from "axios";
    import { useRouter } from "vue-router";
    
    export default {
        name: "LoginPage",
        setup() {
            const router = useRouter();

            // Define form state
            const form = ref({
            name: "",
            email: "",
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
            email: value =>
                /.+@.+\..+/.test(value) || "Please enter a valid email address",
            };
    
            // Handle registration
            const register = async () => {
                if (form.value.password !== form.value.confirmPassword) {
                    alert("Passwords do not match.");
                    return;
                }

                isSubmitting.value = true;
                try {
                    const { name, email, password } = form.value;
                    await axios.post("http://127.0.0.1:8000/api/register", {
                    name,
                    email,
                    password,
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
                    const { data } = await axios.post("http://127.0.0.1:8000/api/login", {
                    email,
                    password,
                    });

                    if (data?.token) {
                        localStorage.setItem("auth_token", data.token);
                        alert("Login successful!");
                        router.push("/"); // Redirect to dashboard or home
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
        
            return { form, isRegistering, isSubmitting, rules, register, login, toggleForm };
            },
        };
    </script>
  
    <style scoped>
    .auth-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    
    .auth-form {
        width: 100%;
        max-width: 400px;
        padding: 20px;
        background: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
    
    .auth-form h2 {
        text-align: center;
        margin-bottom: 20px;
    }
    </style>
  