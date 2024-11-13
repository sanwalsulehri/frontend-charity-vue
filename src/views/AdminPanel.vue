<template>
    <v-container>
      <!-- Loading state or admin panel content -->
      <div v-if="isLoading">Checking admin status...</div>
      <div v-else>
        <v-form @submit.prevent="addCompetition">
          <v-text-field v-model="competition.name" label="Competition Name" required />
          <v-textarea v-model="competition.description" label="Description" required />
          <v-select
            v-model="competition.status"
            :items="['live', 'closed', 'drawn']"
            label="Status"
            required
          />
          <v-text-field v-model="competition.image_location" label="Image URL (optional)" />
          <v-text-field v-model="competition.ticket_pool" label="Ticket Pool" type="number" required />
          <v-text-field v-model="competition.ticket_price" label="Ticket Price" type="number" required />
          <v-btn color="primary" type="submit" :disabled="isSubmitting">Add Competition</v-btn>
        </v-form>
      </div>
    </v-container>
  </template>
  
    <script>
    import { ref, onMounted } from "vue";
    import axios from "axios";
    import { useRouter } from "vue-router";

    export default {
        name: "AdminPanel",
        setup() {
            const router = useRouter();

            // Define form state for competition creation
            const competition = ref({
            name: "",
            description: "",
            status: "live",
            image_location: "",
            ticket_pool: 0,
            });

            // Define loading and submission state
            const isLoading = ref(true);
            const isSubmitting = ref(false);

            // Define reactive token variable
            const token = ref(localStorage.getItem("auth_token"));
            console.log(token.value);
            // Check if user is an admin on mount

            const checkAdmin = async () => {
                try {
                    await axios.get("http://127.0.0.1:8000/api/user-role");
                    isLoading.value = false;
                } catch (error) {
                    // Redirect on 401 (unauthorized) or any other error
                    if (error.response && error.response.status === 401) {
                        router.push("/");
                    } else {
                        alert("Failed to verify admin status. Please try again.");
                        router.push("/login");
                    }
                }
            };

            const addCompetition = async () => {
                isSubmitting.value = true;
                try {
                    await axios.post("http://127.0.0.1:8000/api/competitions", competition.value);

                    alert("Competition added successfully!");
                    competition.value = {
                    name: "",
                    description: "",
                    status: "live",
                    image_location: "",
                    ticket_pool: 0,
                    };
                } catch (error) {
                    console.error("Error adding competition:", error);
                    alert("Failed to add competition. Please try again.");
                } finally {
                    isSubmitting.value = false;
                }
            };

        // Call checkAdmin on component mount
        onMounted(() => {
            checkAdmin();
        });

        return { competition, isLoading, isSubmitting, addCompetition };
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
  