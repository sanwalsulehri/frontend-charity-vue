<template>
  <div class="relative">
    <!-- Header -->
   <Navbar />

    <main class="relative isolate mb-32">
      <!-- Background -->
      <div class="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
        <div class="aspect-1108/632 w-[69.25rem] flex-none bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
      </div>

      <!-- Header section -->
      <div class="px-6 pt-6 lg:px-8">
        <div class="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
          <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Us</h1>
        </div>
      </div>

      <!-- Content section -->
      <div class="mx-auto mt-20 max-w-7xl px-6 lg:px-8 ">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div class=" max-w-x gap-8 text-base/7 text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>There are so many ways to help in the world and buying a competition ticket mightn’t be the first to come to mind, however once we saw the potential to bring fun, sharing the wealth and charity together we just knew we had to create [CharityComps.com].</p>
              <p class="mt-2">Started in December 2024 [insert site name] is the go to site for goodwill towards men with a lucrative twist. We strive to give a percentage of all competition income to charities that will really make a positive change for the causes you care about such as […]. </p>
            </div>
            <div>
              <p class="mt-2" >So buy 1, 100 or 1000 tickets, the bigger the pot the more good we can share. Speaking of sharing, make sure you share our site with friends, family and strangers all, the bigger we grow the more good can be done.</p>
            </div>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="statIdx" class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
              <dt class="text-base/7 text-gray-300">{{ stat.label }}</dt>
              <dd class="text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <section aria-labelledby="collection-heading" class="mx-auto max-w-xl px-4 pt-10 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
        <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <a v-for="collection in collections" :key="collection.name" :href="collection.href" class="group block">
            <img :src="collection.imageSrc" :alt="collection.imageAlt" class="aspect-3/2 w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-5/6" />
            <h3 class="mt-4 text-base font-semibold ">{{ collection.name }}</h3>
            <p class="mt-2 text-sm text-gray-400">{{ collection.description }}</p>
          </a>
        </div>
      </section>
      
    
    </main>

  <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'



const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.',
  },
]


</script>