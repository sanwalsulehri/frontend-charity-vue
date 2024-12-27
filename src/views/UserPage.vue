<template>
  <Sidebar>
  

 <main>
        <h1 class="text-2xl font-semibold p-6">Edit Profile</h1>

        <header class="border-b border-white/5">
          <!-- Secondary navigation -->
          <nav class="flex overflow-x-auto py-4">
            <ul role="list" class="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8">
              <li v-for="item in secondaryNavigation" :key="item.name">
                <a :href="item.href" :class="item.current ? 'text-yellow-400' : ''">{{ item.name }}</a>
              </li>
            </ul>
          </nav>
        </header>

        <!-- Settings forms -->
        <div class="divide-y divide-white/5">
          <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base/7 font-semibold text-white">Personal Information</h2>
              <p class="mt-1 text-sm/6 text-gray-400">Use a permanent address where you can receive mail.</p>
            </div>

            <form @submit.prevent="saveProfile" class="md:col-span-2">
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                

                <div class="sm:col-span-full">
                  <label for="first-name" class="block text-sm/6 font-medium text-white">Name</label>
                  <div class="mt-2">
                    <input type="text" v-model="user.name" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6" />
                  </div>
                </div>
 

                <div class="col-span-full">
                  <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
                  <div class="mt-2">
                    <input id="email" v-model="user.email" name="email" type="email" autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6" />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="username" class="block text-sm/6 font-medium text-white">Phone</label>
                  <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-500">
                       
                      <input v-model="user.phone" type="phone" name="username" id="username" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" placeholder="Phone" />
                    </div>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="username" class="block text-sm/6 font-medium text-white">Street Address</label>
                  <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-500">
              
                      <input v-model="user.street_address" type="text" name="username" id="username" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" placeholder="Street Address" />
                    </div>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="username" class="block text-sm/6 font-medium text-white">Town City</label>
                  <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-500">
                      
                      <input v-model="user.town_city" type="text" name="username" id="username" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" placeholder="Town" />
                    </div>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="username" class="block text-sm/6 font-medium text-white">Postcode</label>
                  <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-500">
                      
                      <input v-model="user.postcode" type="text" name="username" id="username" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" placeholder="Postcode" />
                    </div>
                  </div>
                </div>

               
              </div>

              <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">Edit</button>
              </div>
            </form>
          </div>

         

      
        </div>
      </main>
 
  </Sidebar>

   
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import OrdersPage from './OrdersPage.vue';
 
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Sidebar from '@/layout/Sidebar.vue';
 
// Components
// const components = { OrdersPage };

// Reactive user profile data
const user = reactive({
  name: '',
  email: '',
  street_address: '',
  town_city: '',
  postcode: '',
  phone: '',
});

const valid = ref(true);
const editing = ref(false);
const currentPage = ref('profile'); // Tracks the current page (profile or orders)

// Validation rules
const rules = {
  required: (value) => !!value || 'Required.',
  email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
};

// Router and Store
const router = useRouter();
const store = useStore();

// Fetch User Profile
const fetchUserProfile = async () => {
  try {
   
    const response = await axios.get(`http://35.179.142.94:8000/api/user/profile`);
    Object.assign(user, response.data); // Merge fetched data into the `user` object
  } catch (error) {
    console.error('There was an error fetching the profile:', error);
  }
};

// Toggle Edit Mode
const toggleEdit = () => {
  editing.value = !editing.value;
};

// Save Profile
const saveProfile = async () => {
  try {
 
    await axios.put(`http://35.179.142.94:8000/api/user/profile`, user);
    editing.value = false;
    alert('Profile updated successfully');
  } catch (error) {
    console.error('There was an error updating the profile:', error);
  }
};

// Navigation Functions
const goToOrders = () => {
  currentPage.value = 'orders';
};

const goToProfile = () => {
  currentPage.value = 'profile';
};

// Logout
const logout = () => {
  localStorage.removeItem('auth_token');
  store.dispatch('logout');
  router.push('/auth');
};

// Fetch user profile on mount
onMounted(() => {
  fetchUserProfile();
});

console.log(user, logout, goToProfile,goToOrders,saveProfile,toggleEdit,fetchUserProfile,rules,valid,OrdersPage);
</script>


<style scoped>
.v-container {
  margin-top: 20px;
}
</style>
