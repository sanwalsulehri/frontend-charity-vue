<template>
  <Navbar />
 <main>
        <h1 class="text-2xl font-semibold p-6">Account Settings</h1>

        <header class="border-b border-white/5">
          <!-- Secondary navigation -->
          <nav class="flex overflow-x-auto py-4">
            <ul role="list" class="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-gray-400 sm:px-6 lg:px-8">
              <li v-for="item in secondaryNavigation" :key="item.name">
                <a :href="item.href" :class="item.current ? 'text-emerald-400' : ''">{{ item.name }}</a>
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

            <form class="md:col-span-2">
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div class="col-span-full flex items-center gap-x-8">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-24 flex-none rounded-lg bg-gray-800 object-cover" />
                  <div>
                    <button type="button" class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white/20">Change avatar</button>
                    <p class="mt-2 text-xs/5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm/6 font-medium text-white">First name</label>
                  <div class="mt-2">
                    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name" class="block text-sm/6 font-medium text-white">Last name</label>
                  <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
                  <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="username" class="block text-sm/6 font-medium text-white">Username</label>
                  <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-emerald-500">
                      <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">example.com/</div>
                      <input type="text" name="username" id="username" class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" placeholder="janesmith" />
                    </div>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="timezone" class="block text-sm/6 font-medium text-white">Timezone</label>
                  <div class="mt-2 grid grid-cols-1">
                    <select id="timezone" name="timezone" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6">
                      <option>Pacific Standard Time</option>
                      <option>Eastern Standard Time</option>
                      <option>Greenwich Mean Time</option>
                    </select>
                    <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">Save</button>
              </div>
            </form>
          </div>

          <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base/7 font-semibold text-white">Change password</h2>
              <p class="mt-1 text-sm/6 text-gray-400">Update your password associated with your account.</p>
            </div>

            <form class="md:col-span-2">
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div class="col-span-full">
                  <label for="current-password" class="block text-sm/6 font-medium text-white">Current password</label>
                  <div class="mt-2">
                    <input id="current-password" name="current_password" type="password" autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="new-password" class="block text-sm/6 font-medium text-white">New password</label>
                  <div class="mt-2">
                    <input id="new-password" name="new_password" type="password" autocomplete="new-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="confirm-password" class="block text-sm/6 font-medium text-white">Confirm password</label>
                  <div class="mt-2">
                    <input id="confirm-password" name="confirm_password" type="password" autocomplete="new-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
                  </div>
                </div>
              </div>

              <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">Save</button>
              </div>
            </form>
          </div>

          <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base/7 font-semibold text-white">Log out other sessions</h2>
              <p class="mt-1 text-sm/6 text-gray-400">Please enter your password to confirm you would like to log out of your other sessions across all of your devices.</p>
            </div>

            <form class="md:col-span-2">
              <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                <div class="col-span-full">
                  <label for="logout-password" class="block text-sm/6 font-medium text-white">Your password</label>
                  <div class="mt-2">
                    <input id="logout-password" name="password" type="password" autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-500 sm:text-sm/6" />
                  </div>
                </div>
              </div>

              <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500">Log out other sessions</button>
              </div>
            </form>
          </div>

          <div class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <h2 class="text-base/7 font-semibold text-white">Delete account</h2>
              <p class="mt-1 text-sm/6 text-gray-400">No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>
            </div>

            <form class="flex items-start md:col-span-2">
              <button type="submit" class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-400">Yes, delete my account</button>
            </form>
          </div>
        </div>
      </main>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <!-- Sidebar -->
        <v-navigation-drawer app>
          <v-list dense>
            <v-list-item @click="goToOrders">
              <v-list-item-content>
                <v-list-item-title>Orders</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="goToProfile">
              <v-list-item-content>
                <v-list-item-title>Edit Profile</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              link
              @click="logout"
            >
              <v-list-item-content>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <!-- Profile Information Section -->
        <v-card v-if="currentPage === 'profile'">
          <v-card-title>Edit Profile</v-card-title>
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="user.name"
              label="Name"
              :rules="[rules.required]"
              :disabled="!editing"
            />

            <v-text-field
              v-model="user.email"
              label="Email"
              :rules="[rules.required, rules.email]"
              :disabled="!editing"
            />

            <v-text-field
              v-model="user.street_address"
              label="Street Address"
              :disabled="!editing"
            />

            <v-text-field
              v-model="user.town_city"
              label="Town/City"
              :disabled="!editing"
            />

            <v-text-field
              v-model="user.postcode"
              label="Postcode"
              :disabled="!editing"
            />

            <v-text-field
              v-model="user.phone"
              label="Phone"
              :disabled="!editing"
            />

            <!-- Edit/Save Buttons -->
            <v-btn
              v-if="!editing"
              color="primary"
              @click="toggleEdit"
            >
              Edit
            </v-btn>
            <v-btn
              v-if="editing"
              color="success"
              :disabled="!valid"
              @click="saveProfile"
            >
              Save
            </v-btn>
          </v-form>
        </v-card>

        <!-- Orders Information Section -->
        <orders-page v-if="currentPage === 'orders'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import OrdersPage from './OrdersPage.vue';
import Navbar from '@/components/Navbar.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

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
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${API_URL}/api/user/profile`);
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
    const API_URL = import.meta.env.VITE_API_URL;
    await axios.put(`${API_URL}/api/user/profile`, user);
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
  router.push('/login');
};

// Fetch user profile on mount
onMounted(() => {
  fetchUserProfile();
});
</script>


<style scoped>
.v-container {
  margin-top: 20px;
}
</style>
