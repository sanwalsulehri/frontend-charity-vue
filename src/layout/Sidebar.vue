<template>
    <div>
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>
  
          <div class="fixed inset-0 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
              <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                      <span class="sr-only">Close sidebar</span>
                      <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4 border-l-1 border-white">
                  <div class="flex h-16 shrink-0 items-center">
                    <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                  </div>
                  <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" class="-mx-2 space-y-1">
                          <li v-for="item in navigation" :key="item.name">
                            <router-link :to="item.href" :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                              <component :is="item.icon" class="size-6 shrink-0" aria-hidden="true" />
                              {{ item.name }}
                            </router-link>
                          </li>
                        </ul>
                      </li>
                       
                      
                    </ul>
                  </nav>
                  <button @click="logout" class="text-white mt-auto w-full bg-red-500 hover:bg-red-600 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold">
                    <PowerIcon class="size-6 shrink-0" aria-hidden="true" />
                    Logout
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
  
      <!-- Hamburger Menu -->
      <div class="sm:hidden">
        <DisclosureButton @click="sidebarOpen = true" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="absolute -inset-0.5" />
          <span class="sr-only">Open main menu</span>
          <Bars3Icon v-if="!open" class="size-6" aria-hidden="true" />
          <XMarkIcon v-else class="size-6" aria-hidden="true" />
        </DisclosureButton>
      </div>
      <!-- Static sidebar for desktop -->
      <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r-2 border-gray-800 bg-gray-900 px-6 pb-4">
          <div class="flex h-16 shrink-0 items-center">
            <router-link to="/">

                <h1 class="font-semibold sm:text-lg">
                  CharityComps
                </h1>
    
              </router-link>
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 mt-auto space-y-1">
                  <li v-for="item in navigation" :key="item.name">
                    <router-link :to="item.href" :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                      <component :is="item.icon" class="size-6 shrink-0" aria-hidden="true" />
                      {{ item.name }}
                    </router-link>
                  </li>
                </ul>
              </li>

              <li>
                <!-- Logout -->
                
              </li>
               
            </ul>
          </nav>
          <button @click="logout" class="text-white mt-auto w-full bg-red-500 hover:bg-red-600 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold">
            <PowerIcon class="size-6 shrink-0" aria-hidden="true" />
            Logout
          </button>
        </div>
      </div>
  
      <div class="lg:pl-72">
         
  
        <main class="">
          <div class="px-4 sm:px-6 lg:px-8">
          <slot></slot>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';

  const router = useRouter();
  const store = useStore();
//   import Navbar from '@/components/Navbar.vue';
  import {
    Dialog,
    DialogPanel, 
    TransitionChild,
    TransitionRoot, 

  } from '@headlessui/vue'
  import {
    Bars3Icon,
    HomeIcon, 
    PencilSquareIcon,
    PowerIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline' 
  
  const navigation = [
    { name: 'Orders', href: '/orders', icon: HomeIcon, current: false },
    { name: 'Edit Profile', href: '/user', icon: PencilSquareIcon, current: false },
 
  ]
  
  
  
  const logout = () => {
  localStorage.removeItem('auth_token');
  store.dispatch('logout');
  router.push('/auth');
};
  const sidebarOpen = ref(false)
  </script>