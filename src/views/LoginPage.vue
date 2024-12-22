<template>

  <div class="bg-[#101828] relative min-h-screen pt-10  pb-20  px-4 mx-auto">
  
    <div class="absolute inset-x-0 z-[20] -top-16 flex transform-gpu justify-center overflow-hidden blur-3xl" aria-hidden="true">
          <div class="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" />
        </div>
    <div class=" max-w-2xl mt-12 w-full h-full relative z-[9999] shadow-md border ring-1 ring-white/20 bg-white/5 text-white backdrop-blur-3xl px-5 py-6 rounded-xl mx-auto">
      
    <form v-if="isRegistering" @submit.prevent="register" class="mt-6 ">
      <div class="">
        <h1 class="text-4xl text-center font-semibold">Sign Up</h1>
        <div class="flex mt-6 flex-col gap-4">
          <div>
            <label for="name" class="block text-sm/6 font-medium "
              >Name</label
            >
            <div class="mt-1.5">
              <input
                v-model="form.name"
                :rules="[rules.required]"
                required
                type="text"
                name="name"
                id="name"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Your name"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm/6 font-medium "
              >Email</label
            >
            <div class="mt-1.5">
              <input
                 v-model="form.email"
                 :rules="[rules.required, rules.email]"
                 required
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Your email"
              />
            </div>
          </div>
          <div>
            <label for="text" class="block text-sm/6 font-medium "
              >Street Address</label
            >
            <div class="mt-1.5">
              <input
                v-model="form.street_address"
                :rules="[rules.required]"
                required
                type="text"
                name="text"
                id="text"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Street Address"
              />
            </div>
          </div>

          <div>
            <label for="town" class="block text-sm/6 font-medium "
              >Town City</label
            >
            <div class="mt-1.5">
              <input
                 v-model="form.town_city"
                 :rules="[rules.required]"
        required
                type="text"
                name="town"
                id="town"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Town/City"
              />
            </div>
          </div>


          <div>
            <label for="postcode" class="block text-sm/6 font-medium "
              >Postcode</label
            >
            <div class="mt-1.5">
              <input
                v-model="form.postcode"
                :rules="[rules.required]"
        required
                type="text"
                name="postcode"
                id="postcode"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Postcode"
              />
            </div>
          </div>


          <div>
            <label for="phone" class="block text-sm/6 font-medium "
              >Phone</label
            >
            <div class="mt-1.5">
              <input
                   v-model="form.phone"
                   :rules="[rules.required]"
                   required
                type="type"
                name="phone"
                id="phone"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Phone"
              />
            </div>
          </div>


          <div>
            <label for="Password" class="block text-sm/6 font-medium "
              >Password</label
            >
            <div class="mt-1.5">
              <input
                     v-model="form.password"
                     :rules="[rules.required]"
                     required
                type="password"
                name="Password"
                id="Password"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Password"
              />
            </div>
          </div>


          <div>
            <label for="Confirm Password" class="block text-sm/6 font-medium "
              >Confirm Password</label
            >
            <div class="mt-1.5">
              <input
                     v-model="form.confirmPassword"
                     :rules="[rules.required]"
                     required
                type="password"
                name="Confirm Password"
                id="Confirm Password"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Confirm Password"
              />
            </div>
          </div>




          <button :disabled="isSubmitting" type="button" class="rounded-md w-fit bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>


          <h5 text @click="toggleForm" class="">Already have an account? <a  href="#" class="text-indigo-600 font-medium hover:underline">Login here</a></h5>
        </div>
      </div>
    </form>


    <!-- login -->
    <form v-else @submit.prevent="login" class="mt-6 inset-0 relative m-auto w-full h-full">
      <div class="">
        <h1 class="text-4xl text-center font-semibold">Log In</h1>
        <div class="flex mt-6 flex-col gap-4">
        
          <div>
            <label for="email" class="block text-sm/6 font-medium "
              >Email</label
            >
            <div class="mt-1.5">
              <input
                  v-model="form.email"
                 :rules="[rules.required, rules.email]"
                 required
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Your email"
              />
            </div>
          </div>
         


          <div>
            <label for="Password" class="block text-sm/6 font-medium "
              >Password</label
            >
            <div class="mt-1.5">
              <input
                     v-model="form.password"
                     :rules="[rules.required]"
                     required
                type="password"
                name="Password"
                id="Password"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                placeholder="Password"
              />
            </div>
          </div>


      




          <button :disabled="isSubmitting" type="button" class="rounded-md w-fit bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>

          <h5 text @click="toggleForm" class="">Don't have an account? <a  href="#" class="text-indigo-600 font-medium hover:underline">Sign up</a></h5>

        </div>
      </div>
    </form>
  </div>



 
  </div>
  

  

 
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const store = useStore(); // Access Vuex store

    // Define form state
    const form = ref({
      name: "",
      email: "",
      street_address: "",
      town_city: "",
      postcode: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    // Define form submission state
    const isSubmitting = ref(false);

    // Toggle between login and registration forms
    const isRegistering = ref(true);

    // Validation rules
    const rules = {
      required: (value) => !!value || "This field is required",
      email: (value) =>
        /.+@.+\..+/.test(value) || "Please enter a valid email address",
    };

    // Handle registration
    const register = async () => {
      if (form.value.password !== form.value.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      isSubmitting.value = true;
      try {
        const {
          name,
          email,
          street_address,
          town_city,
          postcode,
          phone,
          password,
        } = form.value;
        await axios.post(`${process.env.VUE_APP_API_URL}/api/register`, {
          name,
          email,
          password,
          street_address,
          town_city,
          postcode,
          phone,
        });

        alert("Registration successful!");
        // Automatically log in after registration
        login();
      } catch (error) {
        alert(
          "Registration failed: " + error.response?.data?.message ||
            error.message
        );
      } finally {
        isSubmitting.value = false;
      }
    };

    // Handle login
    const login = async () => {
      isSubmitting.value = true;
      try {
        const { email, password } = form.value;
        const { data } = await axios.post(
          `${process.env.VUE_APP_API_URL}/api/login`,
          {
            email,
            password,
          }
        );

        if (data?.token) {
          // Store token in Vuex and localStorage
          store.dispatch("login", data.token);
          router.push("/"); // Redirect to home
        } else {
          alert("Login failed: Token not received.");
        }
      } catch (error) {
        alert(
          "Login failed: " + error.response?.data?.message || error.message
        );
      } finally {
        isSubmitting.value = false;
      }
    };

    // Toggle between the forms
    const toggleForm = () => {
      isRegistering.value = !isRegistering.value;
      form.value = { name: "", email: "", password: "", confirmPassword: "" }; // Reset form
    };

    return {
      form,
      isRegistering,
      isSubmitting,
      rules,
      register,
      login,
      toggleForm,
    };
  },
};
</script>
