<template>
  <div id="app">
404
    
  </div>
 
</template>

<script>
 import { mapGetters } from 'vuex'
export default {
     computed: {
    ...mapGetters({
      CurrentPodcast:'Player/CurrentPodcast',
      PodcastPlayList:'Player/PodcastPlayList',
    })
  },
   components:{

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
    overflow:hidden;
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
