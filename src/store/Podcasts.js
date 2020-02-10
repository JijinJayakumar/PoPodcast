import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Podcasts = {
  namespaced: true,
  state: {
    podCasts: {},
    count: 0,
    selectedPodcast: {},
    podcastDocument: {},
    search:'',
  },

  getters: {
    podCasts: state => {
      return state.podCasts;
    },
    search: state => {
      return state.search;
    },
    count: state => {
      return state.count;
    },
    selectedPodcast: state => {
      return state.selectedPodcast;
    },
    podcastDocument: state => {
      return state.podcastDocument;
    }
  },
  mutations: {
    setPodCasts(state, data) {
      state.podCasts = data;
    },
    search(state, data) {
      state.search = data;
    },
    setCount(state, data) {
      state.count = data;
    },
    selectedPodcast(state, data) {
      state.selectedPodcast = data;
    },
    podcastDocument(state, data) {
      state.podcastDocument = data;
    }
  },
  actions: {
    podCasts({ commit }, data) {
      commit("setPodCasts", data);
    },
    search({
        commit
      }, data) {
      commit("search", data);
    },
    count({ commit }, data) {
      commit("setCount", data);
    },
    selectedPodcast({ commit }, data) {
      commit("selectedPodcast", data);
    },
    podcastDocument({ commit }, data) {
      commit("podcastDocument", data);
    }
  },
  modules: {}
};

export default Podcasts