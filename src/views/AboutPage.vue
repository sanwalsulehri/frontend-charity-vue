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
              <p>There are so many ways to help in the world and buying a competition ticket mightn’t be the first to come to mind, however once we saw the potential to bring fun, sharing the wealth and charity together we just knew we had to create CharityComps.com.</p>
              <p class="mt-2">Started in December 2024 [insert site name] is the go to site for goodwill towards men with a lucrative twist. We strive to give a percentage of all competition income to charities that will really make a positive change for the causes you care about such as […]. </p>
            </div>
            <div>
              <p class="mt-2" >So buy 1, 100 or 1000 tickets, the bigger the pot the more good we can share. Speaking of sharing, make sure you share our site with friends, family and strangers all, the bigger we grow the more good can be done.</p>
            </div>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="statIdx" class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6 ">
              <dt class="text-base/7 text-gray-300">{{ stat.label }}</dt>
              <dd class="text-3xl font-semibold tracking-tight text-white">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

       

 
        <div class="bg-gray-900 py-24 sm:py-32">
          <div class="relative isolate">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div class="w-full flex-auto">
                  <h2 class="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Lorem, ipsum dolor.</h2>
                  <p class="mt-6 text-pretty text-lg/8 text-gray-300">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                  <ul role="list" class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                    <li v-for="benefit in benefits" :key="benefit" class="flex gap-x-3">
                      <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
                      {{ benefit }}
                    </li>
                  </ul>
                  <div class="mt-10 flex">
                    <a href="#" class="text-sm/6 font-semibold text-indigo-400">See our job postings <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
              <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
            </div>
          </div>
        </div>


        <div class="bg-gray-900 py-12 sm:py-16">
          <div class="relative isolate">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row-reverse lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                <img class="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm" src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div class="w-full flex-auto">
                  <h2 class="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Lorem ipsum dolor sit.</h2>
                  <p class="mt-6 text-pretty text-lg/8 text-gray-300">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                  <ul role="list" class="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2">
                    <li v-for="benefit in benefits" :key="benefit" class="flex gap-x-3">
                      <CheckCircleIcon class="h-7 w-5 flex-none" aria-hidden="true" />
                      {{ benefit }}
                    </li>
                  </ul>
                  <div class="mt-10 flex">
                    <a href="#" class="text-sm/6 font-semibold text-indigo-400">See our job postings <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
              <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
            </div>
          </div>
        </div>
  
      
      
      
    
    </main>

  <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import { CheckCircleIcon } from '@heroicons/vue/20/solid'
      
      const benefits = [
        'Competitive salaries',
        'Flexible work hours',
        '30 days of paid vacation',
        'Annual team retreats',
        'Benefits for you and your family',
        'A great work environment',
      ]
 


</script>