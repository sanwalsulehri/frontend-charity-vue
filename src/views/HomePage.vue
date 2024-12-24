<template>
  <div class="relative">
  <Navbar />
 
    <div class=" bg-transparent">
    <!-- Hero section -->
  <div class="">
   

    <div class="relative  px-4 isolate pt-14">
      <div class="absolute  -left-20 z-[20]   transform-gpu overflow-hidden blur-3xl -top-40" aria-hidden="true">
        <div class="relative w-screen h-screen opacity-40 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] left-0 top-0" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="py-24 max-w-7xl mt-10 mx-auto relative z-[40] sm:py-24 rounded-3xl">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">CharityComps best products ever!</h1>
            <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" class="rounded-md bg-emerald-500 px-6 py-2.5 font-semibold text-white shadow-xs hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">Get started</a>
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
   

      <!-- latest -->
      <section aria-labelledby="collection-heading" class="mx-auto px-4 my-16 sm:px-6 max-w-7xl lg:px-8">
        <h2 id="collection-heading" class="text-2xl font-bold tracking-tight ">Latest Products</h2>
        <p class="mt-4 text-base text-gray-400">We have a lastest products collections.</p>

        <div class="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-40">
          <a v-for="product in lastestProducts" :key="product.name" :href="product.href" class="group block  max-h-[70vh] h-full">
  <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full rounded-lg object-cover group-hover:opacity-75" />
  <h3 class="mt-4 text-base font-semibold ">{{ product.name }}</h3>
  <p class="mt-2 text-sm text-gray-400">{{ product.description }}</p>
</a>
        </div>
      </section>

      <!-- Featured section -->
      <section aria-labelledby="social-impact-heading" class="mx-auto relative max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div
      class="absolute inset-x-0 z-[20] -top-16 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
        <div class="relative z-[40] overflow-hidden rounded-lg">
          <div class="absolute inset-0">
            <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-01.jpg" alt="" class="size-full object-cover" />
          </div>
          <div class="relative bg-gray-900/75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="social-impact-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <span class="block sm:inline">Level up</span>
                <span class="block sm:inline">your desk</span>
              </h2>
              <p class="mt-3 text-xl text-white">Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.</p>
              <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-emerald-500 px-8 py-3 text-base font-medium  hover:bg-emerald-600 sm:w-auto">Shop Workspace</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Collection section -->
      <section aria-labelledby="collection-heading" class="mx-auto max-w-xl px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
        <h2 id="collection-heading" class="text-2xl font-bold tracking-tight ">Shop by Collection</h2>
        <p class="mt-4 text-base text-gray-400">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

        <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <a v-for="collection in collections" :key="collection.name" :href="collection.href" class="group block">
            <img :src="collection.imageSrc" :alt="collection.imageAlt" class="aspect-3/2 w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-5/6" />
            <h3 class="mt-4 text-base font-semibold ">{{ collection.name }}</h3>
            <p class="mt-2 text-sm text-gray-400">{{ collection.description }}</p>
          </a>
        </div>
      </section>

      <!-- Featured section -->
      <section aria-labelledby="comfort-heading" class="mx-auto relative max-w-7xl px-4 py-24 sm:px-6 sm:py-32 mt-10 lg:px-8">
        <div
      class="absolute inset-x-0 z-[20] -top-16 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
      />
    </div>
        <div class="relative z-[40] overflow-hidden bg-white/5 ring-1 ring-emerald-400 rounded-lg md:rounded-3xl">
          <div class="absolute inset-0">
            <!-- <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-01-feature-section-02.jpg" alt="" class="size-full object-cover" /> -->
          </div>
          <div class="relative  backdrop-blur-3xl px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="comfort-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple productivity</h2>
              <p class="mt-3 text-xl text-white">Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.</p>
              <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-emerald-500 px-8 py-3 text-base font-medium  hover:bg-emerald-600 sm:w-auto">Shop Focus</a>
            </div>
          </div>
        </div>
      </section>
    </main>

   <Footer />
  </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]




const lastestProducts = [
  {
    name: 'Brand logo',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-06.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Special Pen',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-05.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Books',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-04.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
  {
    name: 'Soft Bag',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]





</script>


<style scoped>

</style>