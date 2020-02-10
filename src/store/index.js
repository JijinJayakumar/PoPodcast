import Vue from 'vue'
import Vuex from 'vuex'
import Podcasts from "./Podcasts"
import Player from "./Player"

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    Podcasts,
    Player,
  }
})
