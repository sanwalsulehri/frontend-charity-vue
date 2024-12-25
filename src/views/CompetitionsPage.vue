<template>
  <div>
    <!-- Navbar Component -->
    <Navbar />

    <!-- Competitions Page Content -->
    <div class="relative">
      <div
        class="absolute inset-x-0 z-[20] -top-16 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
        ></div>
      </div>
      <div class="mx-auto relative z-[999] max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sm:text-4xl text-3xl font-semibold tracking-tight">Competitions Page</h2>

        <!-- Grid for Competitions -->
        <div
          v-if="competitions.length"
          class="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5"
        >
          <div
            v-for="competition in competitions"
            :key="competition.id"
            class="group overflow-hidden relative transition-all duration-400 bg-[#101828] ring-[1px] ring-emerald-500 rounded-lg "
          >
            <div class="w-full h-fit overflow-hidden">
              <img
                :src="getImagePath(competition.image_location)"
                class="aspect-square w-full group-hover:scale-[1.02] transition-all duration-300 rounded-t-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
                alt="Competition Image"
              />
            </div>

            <div class="px-5 py-5 flex justify-between ]">
              <div>
                <h1 class="text-xl  capitalize font-semibold">{{ competition.name }}</h1>
                <p class="mt-1 text-sm text-gray-400 min-h-[60px] line-clamp-3">{{ competition.description }}</p>
                <div class="mt-2 text-gray-200 flex items-center gap-1 font-medium">Status:
                  <div class="relative w-1.5 h-1.5 bg-green-500 rounded-full flex items-center justify-center">
                    <div class="h-1.5 w-1.5 bg-green-500 animate-ping rounded-full"></div>
                  </div>
                  {{ competition.status }}
                </div>
               
              </div>
              <p class="font-semibold underline decoration-emerald-500 underline-offset-2">${{ competition.ticket_price || "N/A" }}</p>

            </div>
            <router-link 
              :to="`/competition/${competition.id}`"
              class="rounded-md bg-emerald-500 w-[90%] mx-4 hover:bg-emerald-800 mt-[0px] mb-[10px] px-4 sm:px-8 py-2 font-semibold text-white shadow-sm block text-center"
            >
              View Competition
            </router-link>
          </div>
        </div>

        <!-- Message for No Competitions -->
        <div v-else class="text-center">
          No competitions available at the moment.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import Navbar from "@/components/Navbar.vue";

const competitions = ref([]);

const fetchCompetitions = async () => {
  try {
    const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/competitions`);
    if (response.data && Array.isArray(response.data)) {
      competitions.value = response.data;
    } else {
      console.error("Unexpected API response structure:", response.data);
    }
  } catch (error) {
    console.error("Error fetching competitions:", error.response || error.message);
  }
};

// Function to get image path
const getImagePath = (image) => {
  return image
    ? `${process.env.VUE_APP_API_URL}/storage/${image}`
    : "/default-image.png"; // Fallback image
};

// Fetch competitions on mount
onMounted(fetchCompetitions);
</script>

<style scoped>
/* Add custom styles here if needed */
.v-card {
  margin-bottom: 20px;
}
</style>
