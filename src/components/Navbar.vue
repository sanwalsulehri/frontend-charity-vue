<template>
  <Disclosure
    v-slot="{ open }"
    as="nav"
    class="bg-gray-800 text-white w-full z-[99999] relative"
  >
    <div class="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8">
      <div class="relative w-full flex h-16 items-center justify-between">
      
        <div class="flex flex-1 items-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <a href="/">

            <h1 class="font-semibold sm:text-lg">
              CharityComps
            </h1>

          </a>

          </div>
          <div class="hidden sm:ml-6 sm:block">
  <div class="flex space-x-4">
    <a
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
      :aria-current="item.current ? 'page' : undefined"
    >
      {{ item.name }}
    </a>
  </div>
</div>

        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            class="relative rounded-full sm:mr-3 mr-1 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon
              class="sm:size-6 size-4"
              aria-hidden="true"
            />
          </button>
          <router-link to="/cart">

          <button
            type="button"
            class="relative rounded-full sm:mr-3 mr-1 bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <ShoppingBagIcon
              class="size-4 sm:size-6"
              aria-hidden="true"
            />
            <div class="absolute top-0 text-xs bg-gray-700 right-0 size-4 rounded-full">
              {{ cartCount }}
            </div>
          </button>

        </router-link>

 
          <!-- Profile dropdown -->
          <Menu
            as="div"
            class="relative ml-3"
          >
            <div>
              <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <img
                  class="size-6 sm:size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                >
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 text-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-700 outline-none' : '', 'block px-4 py-2 text-sm ']"
                  >Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-700 outline-none' : '', 'block px-4 py-2 text-sm ']"
                  >Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[active ? 'bg-gray-700 outline-none' : '', 'block px-4 py-2 text-sm ']"
                  >Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <div class=" sm:w-0 inset-y-0  ml-3 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon
              v-if="!open"
              class="block size-6"
              aria-hidden="true"
            />
            <XMarkIcon
              v-else
              class="block size-6"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>
        </div>
      </div>
    </div>
 
    <DisclosurePanel class="sm:hidden">
  <div class="space-y-1 px-2 pb-3 pt-2">
    <DisclosureButton
      v-for="item in navigation"
      :key="item.name"
      as="a"
      :href="item.href"
      :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
      :aria-current="item.current ? 'page' : undefined"
    >
      {{ item.name }}
    </DisclosureButton>
  </div>
</DisclosurePanel>

  </Disclosure>
</template>
 
 <script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'; // Import useRoute for getting current route
import '../assets/index.css';

const store = useStore();
const route = useRoute(); // Get the current route
const cartCount = computed(() => store.getters.cartCount);

onMounted(() => {
  store.dispatch('updateLoginStatus');
});

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { Bars3Icon, BellIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Competitions', href: '/competitions' },
  { name: 'About', href: '/about' },
];

// Mark the current navigation item based on the current route
navigation.forEach(item => {
  item.current = route.path === item.href;
});
</script>

 