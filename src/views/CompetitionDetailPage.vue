<template>
  <Navbar />
  <div class="">
    <div class="pt-6 pb-16 sm:pb-24">
      <div
        v-if="competition"
        class="mx-auto mt-12  max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div class="lg:grid  lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div class="lg:col-span-5 lg:col-start-8">
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-white capitalize">
                {{ competition.name }}
              </h1>
              <p class="text-xl font-medium text-white borderB">
                {{ competition.ticket_price }}
              </p>
            </div>
            <!-- Reviews -->

            <div class="mt-4">
              <div class="">
                Ticket Pool:
                <span class="text-emerald-500">{{
                  competition.ticket_pool
                }}</span>
              </div>
            </div>

            <div class="mt-2 text-gray-200 flex items-center gap-1 font-medium">
              Status:
              <div
                class="relative w-1.5 h-1.5 bg-green-500 rounded-full flex items-center justify-center"
              >
                <div
                  class="h-1.5 w-1.5 bg-green-500 animate-ping rounded-full"
                ></div>
              </div>
              {{ competition.status }}
            </div>
          </div>

          <!-- Image gallery -->
          <div
            class=" lg:col-span-7 mt-2 h-full max-h-[80vh] lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
          >
            <h2 class="sr-only">Images</h2>

            <div class="w-full h-full  overflow-hidden">
              <img
                class="w-full object-cover rounded-lg h-full"
                :src="getImagePath(competition.image_location)"
              />
            </div>
          </div>

          <div class="mt-8 lg:col-span-5">
            <div>
              <!-- Color picker -->

              


              <!-- input -->
               <div class="flex mt-5 flex-wrap items-center gap-2">
                <h1 class=" font-medium text-white ">
                Product Quantity
              </h1>
              <input v-model="quantity" type="number" class="borders px-2 appearance-none py-2 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500" />
               </div>

              <button
              @click="addToCart"
                type="submit"
                class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Add to cart
              </button>
            </div>

            <!-- Product details -->
            <div class="mt-10">
              <h2 class="text-sm font-medium text-white">Description</h2>

              <div class="mt-4 space-y-4 text-sm/6 text-white">
                {{ competition.description }}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
 
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';



 



// Reactive properties
const competition = ref({});
const quantity = ref(1);
const competitionImage = ref("");
 

// const selectedSize = ref(product.sizes[2]);

// Vuex and Vue Router
const store = useStore();
const route = useRoute();

// Methods
const addToCart = () => {
  store.commit("addToCart", {
    competitionId: competition.value.id,
    competitionName: competition.value.name,
    ticketPrice: competition.value.ticket_price,
    quantity: quantity.value,
  });


  Toastify({
    text: "Item added to your Cart",
    duration: 5000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: "#111827",
      color: "#FFFFFF",      
      borderRadius: "8px",
      padding: "12px 16px",
      border: "1px solid #374151",
      animation: "jumpIn 0.5s ease-out, jumpOut 0.5s ease-out 4.5s",
    },
  }).showToast();


  
};

const fetchCompetition = async () => {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_API_URL}/api/competition/${route.params.id}`
    );
    competition.value = response.data.competition;
  } catch (error) {
    console.error("Error fetching competition details:", error);
  }
};

const getImagePath = (image) => {
  return `${process.env.VUE_APP_API_URL}/storage/${image}`;
};

// Watchers
watch(
  () => competition.value.image_location,
  (newValue) => {
    if (newValue) {
      competitionImage.value = getImagePath(newValue);
    }
  },
  { immediate: true }
);

// Lifecycle hooks
onMounted(() => {
  fetchCompetition();
});
</script>
<style scoped>
.v-card {
  margin-top: 20px;
}

.borders {
  border: 1px solid #059669;
}

.borderT {
  border-top: 1px solid #059669;
}

.borderB {
  border-bottom: 1px solid #059669;
}


@keyframes jumpIn {
  0% {
    transform: translateX(30px) translateY(-30px);
    opacity: 0;
  }
  60% {
    transform: translateX(0) translateY(10px);
    opacity: 1;
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes jumpOut {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateX(10px) translateY(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(30px) translateY(-30px);
    opacity: 0;
  }
}
</style>
