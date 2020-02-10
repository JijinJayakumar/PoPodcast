<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <img src="@/assets/logo.png" height="50px" width="50px" class="demo-affix">
      <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1">
        <router-link to="/">
          <Icon type="ios-musical-notes" /> Home</router-link>
        </MenuItem>
        <MenuItem name="2">
        <router-link to="/about">
          <Icon type="ios-information-circle" /> About</router-link>
        </MenuItem>
      </Menu>
    </div>
    <br>
    <router-view />
    <br>
    <br>
    <br>
    <footer class="fix-footer">
      <div class="content has-text-centered">
        <aplayer autoplay :music="CurrentPodcast" :list="PodcastPlayList" :listFolded="true" :showLrc="true" />
      </div>
    </footer>

  </div>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        CurrentPodcast: 'Player/CurrentPodcast',
        PodcastPlayList: 'Player/PodcastPlayList',
      })
    },
    components: {
      Aplayer
    },
  }
</script>


<style>
  footer {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
    width: 100%;
    overflow: hidden;
  }

  /* .fix-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    overflow:hidden;
} */
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>