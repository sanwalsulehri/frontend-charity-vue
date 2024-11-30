<template>
  <v-container>
    <!-- Loading state or admin panel content -->
    <div v-if="isLoading">Checking admin status...</div>
    <div v-else>
      <v-form @submit.prevent="addCompetition">
        <!-- Competition Fields -->
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

        <!-- Dynamic Instant Win Input -->
        <div class="mt-4">
          <h3>Instant Wins</h3>
          <div v-for="(win, index) in instantWins" :key="index" class="d-flex align-center">
            <v-text-field
              v-model.number="win.win_amount"
              label="Win Amount"
              type="number"
              class="mr-2"
              required
            />
            <v-text-field
              v-model.number="win.quantity"
              label="Quantity"
              type="number"
              class="mr-2"
              required
            />
            <v-btn color="error" @click="removeInstantWinRow(index)">Remove</v-btn>
          </div>
          <v-btn color="primary" @click="addInstantWinRow" class="mt-2">Add Instant Win</v-btn>
        </div>

        <!-- Submit Button -->
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
      ticket_price: 0,
    });

    // Define state for instant wins
    const instantWins = ref([{ win_amount: 0, quantity: 0 }]);

    // Loading and submission state
    const isLoading = ref(true);
    const isSubmitting = ref(false);

    // Check if user is an admin
    const checkAdmin = async () => {
      try {
        await axios.get("http://127.0.0.1:8000/api/user-role");
        isLoading.value = false;
      } catch (error) {
        if (error.response?.status === 401) {
          router.push("/");
        } else {
          alert("Failed to verify admin status. Please try again.");
          router.push("/login");
        }
      }
    };

    // Add a new instant win row
    const addInstantWinRow = () => {
      instantWins.value.push({ win_amount: 0, quantity: 0 });
    };

    // Remove an instant win row
    const removeInstantWinRow = (index) => {
      instantWins.value.splice(index, 1);
    };

    // Add competition
    const addCompetition = async () => {
      isSubmitting.value = true;

      // Convert instantWins to key-value format
      const formattedInstantWins = instantWins.value.reduce((acc, win) => {
        const { win_amount, quantity } = win;
        if (win_amount > 0 && quantity > 0) {
          acc[win_amount] = quantity;
        }
        return acc;
      }, {});

      try {
        await axios.post("http://127.0.0.1:8000/api/competitions", {
          ...competition.value,
          instant_wins: formattedInstantWins,
        });

        alert("Competition added successfully!");
        competition.value = {
          name: "",
          description: "",
          status: "live",
          image_location: "",
          ticket_pool: 0,
          ticket_price: 0,
        };
        instantWins.value = [{ win_amount: 0, quantity: 0 }];
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

    return {
      competition,
      instantWins,
      isLoading,
      isSubmitting,
      addInstantWinRow,
      removeInstantWinRow,
      addCompetition,
    };
  },
};
</script>

<style scoped>
/* Optional styling */
</style>
