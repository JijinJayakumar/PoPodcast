import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Player = {
  namespaced: true,
  state: {
    CurrentPodcast: {},
    PodcastPlayList: {},
  },

  getters: {
    CurrentPodcast: state => {
      return state.CurrentPodcast;
    },
    PodcastPlayList: state => {
      return state.PodcastPlayList;
    },
  },
  mutations: {
    CurrentPodcast(state, data) {
      state.CurrentPodcast = data;
    },
    PodcastPlayList(state, data) {
      state.PodcastPlayList = data;
    },
  },
  actions: {
    addCurrentPodcast({
        commit
      }, data) {
      commit("CurrentPodcast", data);
    },
    addPodcastPlayList({
        commit
      }, data) {
      commit("PodcastPlayList", data);
    },
  },
  modules: {}
};

export default Player