<template>
  <div class="home">
    <b-field label="Search" type="is-success" message="">
      <b-input value="" maxlength="30" v-model="searchTerm"></b-input>
      <!-- //@input.native="searchPodcasts" -->

    </b-field>
    <b-progress type="is-info" v-if="searching"></b-progress>

    <span v-if="podcastCount!=0">{{podcastCount}} data found</span>
    <span v-for="podCast in podCasts" v-bind:key="podCast.collectionId">

      <cardView :newData="podCast" :artworkUrl="podCast.artworkUrl100"></cardView>
    </span>


  </div>
</template>

<script>
  import axios from "axios"
  import _ from 'lodash'
  import cardView from '../components/cardView'
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: 'home',
    computed: {
      ...mapGetters({
        podcastCount: 'Podcasts/count',
        podCasts: 'Podcasts/podCasts',
        search: 'Podcasts/search',
      })
    },
    data() {
      return {
        searching: false,
        searchTerm: '',
        searchResult: {}
      }
    },
    created() {
      this.searchTerm = this.search
    },

    components: {
      cardView
    },
    watch: {
      //to delay the search
      searchTerm: _.debounce(function () {
        this.$store.dispatch('Podcasts/search', this.searchTerm);
        this.searchPodcasts()
      }, 1000)
    },
    methods: {
      async searchPodcasts() {
        this.searching = true
        const uri = `https://itunes.apple.com/search?media=podcast&term=${this.searchTerm}`


        axios.get(uri)
          .then((response) => {
            // this.searchResult = response.data
            this.$store.dispatch('Podcasts/podCasts', response.data.results);
            this.$store.dispatch('Podcasts/count', response.data.resultCount)

            console.log("object")
            console.log(response);
          })
          .catch((error) => {
            this.searching = false
            console.log(error);
          })
          .then(() => {
            this.searching = false
            console.log("completed")
            // always executed
          })



      }
    }
  }
</script>