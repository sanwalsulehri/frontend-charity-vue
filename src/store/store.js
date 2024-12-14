// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    isLoggedIn: !!localStorage.getItem('auth_token'), // Check if the user is logged in
    authToken: localStorage.getItem('auth_token') || '', // Store auth token
  },
  mutations: {
    addToCart(state, { competitionId, competitionName, ticketPrice, quantity }) {
      quantity = parseInt(quantity, 10); 

      const existingItem = state.cart.find(item => item.competitionId === competitionId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ competitionId, competitionName, ticketPrice, quantity });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, competitionId) {
      state.cart = state.cart.filter(item => item.competitionId !== competitionId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
    setAuthToken(state, token) {
      state.authToken = token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.authToken = '';
      localStorage.removeItem('auth_token');
    },
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem('auth_token', token);
      commit('setLoggedIn', true);
      commit('setAuthToken', token);
    },
    logout({ commit }) {
      commit('logout');
    },
    updateLoginStatus({ commit }) {
      const tokenExists = !!localStorage.getItem('auth_token');
      commit('setLoggedIn', tokenExists);
      if (tokenExists) {
        commit('setAuthToken', localStorage.getItem('auth_token'));
      }
    },
  },
  getters: {
    cartCount: state => state.cart.reduce((acc, item) => acc + item.quantity, 0),
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((acc, item) => acc + item.ticketPrice * item.quantity, 0),
    isLoggedIn: state => state.isLoggedIn,
    authToken: state => state.authToken,
  },
});

export default store;
