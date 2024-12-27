<template>
  <div class="relative">
    <Navbar />

    <div class=" bg-transparent">
      <!-- Hero section -->
      <div class="">


        <div class="relative  px-4 isolate pt-14">
          <div class="absolute  -left-20 z-[20]   transform-gpu overflow-hidden blur-3xl -top-40" aria-hidden="true">
            <div
              class="relative w-screen h-screen opacity-40 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] left-0 top-0"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
          </div>
          <div class="py-24 max-w-7xl mt-10 mx-auto relative z-[40] sm:py-24 rounded-3xl">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl text-center">
                <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">CharityComps best
                  products ever!</h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Anim aute id magna aliqua ad ad
                  non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#"
                    class="rounded-md bg-yellow-500 px-6 py-2.5 font-semibold text-white shadow-xs hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">Get
                    started</a>
                  <a href="#" class="font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



      <main>
        <!-- Category section -->
        <!-- Category section -->
        
        <!-- Featured section -->


        <!-- Collection section -->
        <section aria-labelledby="collection-heading"
          class="mx-auto max-w-xl px-4 pt-24 mb-40 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <h2 id="collection-heading" class="text-2xl font-bold tracking-tight ">Latest Competetions</h2>
          <p class="mt-4 text-base text-gray-400">Each season, we collaborate with world-class designers to create a
            collection inspired by the natural world.</p>

            <div
            v-if="competitions.length"
            class="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-5"
          >
            <div
              v-for="competition in competitions.slice((competitions.length - 4), competitions.length)"
              :key="competition.id"
              class="group overflow-hidden relative transition-all duration-400 bg-[#101828] ring-[1px] ring-yellow-500 rounded-lg "
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
                    <div class="relative w-1.5 h-1.5 bg-yellow-500 rounded-full flex items-center justify-center">
                      <div class="h-1.5 w-1.5 bg-yellow-500 animate-ping rounded-full"></div>
                    </div>
                    {{ competition.status }}
                  </div>
                 
                </div>
                <p class="font-semibold underline decoration-yellow-500 underline-offset-2">${{ competition.ticket_price || "N/A" }}</p>
  
              </div>
              <router-link 
                :to="`/competition/${competition.id}`"
                class="rounded-md bg-yellow-500 w-[90%] mx-4 hover:bg-yellow-800 mt-[0px] mb-[10px] px-4 sm:px-8 py-2 font-semibold text-white shadow-sm block text-center"
              >
                View Competition
              </router-link>
            </div>
          </div>
        </section>

        <!-- Featured section -->
        <section aria-labelledby="collection-heading"
          class="mx-auto max-w-xl px-4 pt-24 mb-40 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
          <h2 id="collection-heading" class="text-2xl font-bold tracking-tight ">Competitions</h2>
          <p class="mt-4 text-base text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, harum? Accusantium dignissimos ducimus non doloribus officiis at expedita. Consequatur cupiditate iste, deserunt minima quas nam quidem inventore obcaecati totam ipsa!</p>
        </section>

      </main>

      <Footer />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from "vue";
import axios from "axios";


 
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

onMounted(fetchCompetitions);

// const collections = [
//   {
//     name: 'Handcrafted Collection',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg',
//     imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
//     description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
//   },
//   {
//     name: 'Organized Desk Collection',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg',
//     imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
//     description: 'The rest of the house will still be a mess, but your desk will look great.',
//   },
//   {
//     name: 'Focus Collection',
//     href: '#',
//     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg',
//     imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
//     description: 'Be more productive than enterprise project managers with a single piece of paper.',
//   },
// ]
const getImagePath = (image) => {
  return image
    ? `${process.env.VUE_APP_API_URL}/storage/${image}`
    : "/default-image.png"; // Fallback image
};



 





</script>


<style scoped></style>