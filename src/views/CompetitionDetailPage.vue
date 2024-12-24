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

            <div class="w-full h-full">
              <img
                class="w-full h-full"
                :src="getImagePath(competition.image_location)"
              />
            </div>
          </div>

          <div class="mt-8 lg:col-span-5">
            <div>
              <!-- Color picker -->

              <!-- Size picker -->
              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-medium text-white">Size</h2>
                  <a
                    href="#"
                    class="text-sm font-medium text-emerald-600 hover:text-emerald-500"
                    >See sizing chart</a
                  >
                </div>

                <fieldset aria-label="Choose a size" class="mt-2">
                  <RadioGroup
                    v-model="selectedSize"
                    class="grid grid-cols-3 gap-3 sm:grid-cols-6"
                  >
                    <RadioGroupOption
                      as="template"
                      v-for="size in product.sizes"
                      :key="size.name"
                      :value="size"
                      :disabled="!size.inStock"
                      v-slot="{ active, checked }"
                    >
                      <div
                        :class="[
                          size.inStock
                            ? 'cursor-pointer  focus:outline-hidden'
                            : 'cursor-not-allowed opacity-25',
                          active
                            ? 'ring-2  ring-emerald-500 ring-offset-2'
                            : '',
                          checked
                            ? 'border-transparent bg-emerald-600 text-white hover:bg-emerald-700'
                            : ' bg-gray-900 text-white hover:bg-gray-50/10',
                          'flex items-center justify-center rounded-md  px-3 py-3 borders text-sm font-medium uppercase sm:flex-1',
                        ]"
                      >
                        {{ size.name }}
                      </div>
                    </RadioGroupOption>
                  </RadioGroup>
                </fieldset>
              </div>


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

            <div class="mt-8 borderT pt-8">
              <h2 class="text-sm font-medium text-white">Fabric &amp; Care</h2>

              <div class="mt-4">
                <ul
                  role="list"
                  class="list-disc space-y-1 pl-5 text-sm/6 text-white marker:text-gray-300"
                >
                  <li v-for="item in product.details" :key="item" class="pl-2">
                    {{ item }}
                  </li>
                </ul>
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
import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';



 



// Reactive properties
const competition = ref({});
const quantity = ref(1);
const competitionImage = ref("");
const product = {
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
  ],

  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

const selectedSize = ref(product.sizes[2]);

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
