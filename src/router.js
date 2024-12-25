import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import LoginPage from './views/LoginPage.vue';
import CompetitionsPage from './views/CompetitionsPage.vue';
import CompetitionDetailPage from './views/CompetitionDetailPage.vue';
import CartPage from './views/CartPage.vue';
import CheckoutPage from './views/CheckoutPage.vue';
import UserPage from './views/UserPage.vue';
import AdminPanel from './views/AdminPanel.vue';
import UserProfileAdmin from '@/components/UserProfileAdmin.vue';
import OrdersPage from './views/OrdersPage.vue';
import axios from "axios";


const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  { path: '/login', component: LoginPage },
  { path: '/competitions', component: CompetitionsPage },
  { path: '/cart', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/user', component: UserPage },
  { path: '/orders', component: OrdersPage },

  {
    path: '/ccadmin',
    name: 'AdminPanel',
    component: AdminPanel,
    children: [
      {
        path: 'user/:id',
        component: UserProfileAdmin,
        props: true, 
      },
    ],
    beforeEnter: async (to, from, next) => {
        try {
            const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/user-role`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                }
            });

            if (response.data.is_admin) {
                next();
            } else {
                next('/');
            }
        } catch (error) {
            console.error("Authorization error:", error);
            next('/');
        }
    },
},

{
  path: '/competition/:id',
  name: 'CompetitionDetail',
  component: CompetitionDetailPage,
}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;