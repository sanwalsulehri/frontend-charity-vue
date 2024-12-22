import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import axios from 'axios';
import './assets/index.css'

const vuetify = createVuetify({
  components,
  directives,
});

axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const app = createApp(App);
app.use(vuetify);
app.use(store);  
app.use(router);
app.mount('#app');
