import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const loggedInUser = localStorage.getItem("user") || null;

export default new Vuex.Store({
  state: {
    user: JSON.parse(loggedInUser),
    users: [
      { email: "mohamed@instabug.com", password: "12345678" },
      { email: "mohamed1@instabug.com", password: "12345678" },
      { email: "mohamed2@instabug.com", password: "12345678" },
      { email: "mohamed3@instabug.com", password: "12345678" },
      { email: "mohamed4@instabug.com", password: "12345678" },
      { email: "mohamed5@instabug.com", password: "12345678" },
      { email: "mohamed6@instabug.com", password: "12345678" },
      { email: "mohamed7@instabug.com", password: "12345678" },
    ],
  },
  mutations: {
    login(state, payload) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload)); // setting the user state in the localStorage... this should be a token but for our app it's the email.
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("login", payload);
    },
    logout({ commit }) {
      commit("logout");
    },
  },
  modules: {},
});
