import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [
      {
        name: "Max",
        breed: "hound-afghan",
        img: "https://images.dog.ceo/breeds/hound-afghan/n02088094_732.jpg"
      },
      {
        name: "Rusty",
        breed: "hound-basset",
        img: "https://images.dog.ceo/breeds/hound-basset/n02088238_11383.jpg",
      },
      {
        name: "Rocco",
        breed: "hound-blood",
        img: "https://images.dog.ceo/breeds/hound-blood/n02088466_11903.jpg",
      },
    ]
  },
  mutations: {
    addToFavorites(state, payload) {
      state.favorites.push(payload);
    },
  },
  actions: {
    addToFavorites({ commit }, payload) {
      commit('addToFavorites', payload);
    },
  }
});
