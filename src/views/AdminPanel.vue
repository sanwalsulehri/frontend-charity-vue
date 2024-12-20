<template>
  <v-container>
    <div v-if="isLoading">Checking admin status...</div>
    <div v-else>
      <v-row>
        <!-- Side Panel -->
        <v-col cols="12" md="3">
          <v-navigation-drawer app>
            <v-list>
              <v-list-item @click="showCompetitions" v-bind:class="{'v-list-item--active': activeSection === 'competitions'}">
                <v-list-item-title>Competitions</v-list-item-title>
              </v-list-item>
              <v-list-item @click="showUsers" v-bind:class="{'v-list-item--active': activeSection === 'users'}">
                <v-list-item-title>Users</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-col>

        <!-- Content Section -->
        <v-col cols="12" md="9">
          <v-row>
            <v-col>
              <v-btn @click="isAdminPanel = true">Admin Panel</v-btn>
            </v-col>
          </v-row>

          <!-- Competitions Section -->
          <div v-if="activeSection === 'competitions'">
            <v-form @submit.prevent="addCompetition">
              <v-text-field v-model="competition.name" label="Competition Name" required />
              <v-textarea v-model="competition.description" label="Description" required />
              <v-select
                v-model="competition.status"
                :items="['live', 'closed', 'drawn']"
                label="Status"
                required
              />

              <div class="mt-4">
                <label for="image-upload">Upload Competition Image</label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  @change="handleFileUpload"
                />
              </div>

              <v-text-field
                v-model="competition.ticket_pool"
                label="Ticket Pool"
                type="number"
                required
              />
              <v-text-field
                v-model="competition.ticket_price"
                label="Ticket Price"
                type="number"
                required
              />

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
              <v-btn color="primary" type="submit" :disabled="isSubmitting">Add Competition</v-btn>
            </v-form>
          </div>

          <!-- Users Section -->
          <div v-if="activeSection === 'users'">
            <users-list />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import UsersList from "@/components/UsersList.vue";  // Import the UsersList component

export default {
  name: "AdminPanel",
  components: {
    UsersList,  // Register the UsersList component
  },
  setup() {
    const router = useRouter();
    const competition = ref({
      name: "",
      description: "",
      status: "live",
      image_location: "", 
      ticket_pool: 0,
      ticket_price: 0,
    });
    const imageFile = ref(null); 
    const instantWins = ref([{ win_amount: 0, quantity: 0 }]);

    const isLoading = ref(true);
    const isSubmitting = ref(false);
    const activeSection = ref("competitions");  // Default section is 'competitions'

    const checkAdmin = async () => {
      try {
        await axios.get(`${process.env.VUE_APP_API_URL}/api/user-role`);
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

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        imageFile.value = file;
      }
    };

    const addInstantWinRow = () => {
      instantWins.value.push({ win_amount: 0, quantity: 0 });
    };

    const removeInstantWinRow = (index) => {
      instantWins.value.splice(index, 1);
    };

    const addCompetition = async () => {
      if (!imageFile.value) {
        alert("Please upload an image.");
        return;
      }

      isSubmitting.value = true;

      try {
        const formData = new FormData();
        formData.append("image", imageFile.value);

        const uploadResponse = await axios.post(
          `${process.env.VUE_APP_API_URL}/api/upload-image`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { path } = uploadResponse.data;
        const formattedInstantWins = instantWins.value.reduce((acc, win) => {
          const { win_amount, quantity } = win;
          if (win_amount > 0 && quantity > 0) {
            acc[win_amount] = quantity;
          }
          return acc;
        }, {});

        await axios.post(`${process.env.VUE_APP_API_URL}/api/competitions`, {
          ...competition.value,
          image_location: path, 
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
        imageFile.value = null;
      } catch (error) {
        console.error("Error adding competition:", error);
        alert("Failed to add competition. Please try again.");
      } finally {
        isSubmitting.value = false;
      }
    };

    const showCompetitions = () => {
      activeSection.value = "competitions";  // Switch to competitions section
    };

    const showUsers = () => {
      activeSection.value = "users";  // Switch to users section
    };

    onMounted(() => {
      checkAdmin();
    });

    return {
      competition,
      instantWins,
      isLoading,
      isSubmitting,
      imageFile,
      handleFileUpload,
      addInstantWinRow,
      removeInstantWinRow,
      addCompetition,
      activeSection,
      showCompetitions,
      showUsers,
    };
  },
};
</script>

<style scoped>
.v-list-item--active {
  background-color: #f0f0f0;
}
</style>
