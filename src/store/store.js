// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  mutations: {
    addToCart(state, { competitionId, competitionName, ticketPrice, quantity }) {
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
    }
  },
  getters: {
    cartCount: state => state.cart.reduce((acc, item) => acc + item.quantity, 0),
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((acc, item) => acc + item.ticketPrice * item.quantity, 0)
  }
});

export default store;
