<template>
  <div class="about">
    <div class="demo-spin-container" v-if="loadingData">
      <Spin size="large" fix></Spin>
    </div>
    <!-- after loading show content -->
    <div v-else>
      <h1>{{feedData.feed.title}}</h1>

      <div class="card">
        <div class="card-image">
          <figure class="image is-4by4">
            <img :src="feedData.feed.image" alt="image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="feedData.feed.image" alt="image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4"> {{feedData.feed.title}} </p>
              <p class="subtitle is-6">{{feedData.feed.description}}</p>
            </div>
          </div>

          <div class="content">
            <a :href="feedData.feed.link" target="_blank" rel="noopener">@{{feedData.feed.author}}</a>.

            <br>
            ->
          </div>
        </div>
      </div>




      <div class="card" v-for="(list,index) in playList" :key='index' @click="playPodcast(index)">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="list.pic" alt="image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4"> {{list.title}} </p>
              <!-- <p class="title is-4" v-html="list.description"></p> -->
              <p class="subtitle is-6"> {{list.artist}} {{list.published_date}}</p>
            </div>
          </div>
        </div>
      </div>



    </div>


  </div>
</template>
<script>
  import axios from "axios"

  import {
    mapGetters
  } from 'vuex'


  export default {
    destroyed() {
      this.$router.push('/')
    },

    computed: {
      ...mapGetters({
        selectedPodcast: 'Podcasts/selectedPodcast',
        podcastDocument: 'Podcasts/podcastDocument',
      })
    },
    data() {
      return {
        loadingData: true,
        newList: '',
        feedData: '',
        playList: '',
        artistId: this.$route.params.id
      }
    },

    async created() {
      this.loadingData = true
      const uri = 'https://api.rss2json.com/v1/api.json?rss_url=' + this.selectedPodcast.feedUrl +
        '&api_key=fcefkqcqbiinuo60mhfeg9pdtun6ddnhc4zljlxr'
      axios.get(uri)
        .then((response) => {
          this.feedData = response.data
          this.playList = response.data.items.map((item) => {
            return {
              title: item.title,
              description: item.description,
              guid: item.guid,
              published_date: item.pubDate,
              link: item.link,
              artist: item.author,
              src: item.enclosure.link,
              type: item.enclosure.type,
              length: item.enclosure.length,
              pic: item.thumbnail,
            }
          })

        })



        .catch(() => {

        })
        .then(() => {
          this.loadingData = false

        })

    },
    methods: {

      playPodcast(index) {
        this.$store.dispatch('Player/addCurrentPodcast', this.playList[index]);
        this.$store.dispatch('Player/addPodcastPlayList', this.playList);
      },

      fancyTimeFormat(time) {
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
      }
    },
    watch: {
      podcastDocument() {
        // const items = this.podcastDocument.getElementsByTagName("item")
        console.log("items0...................................")
        //         console.log(items)
        //         const enclosures = Array.prototype.slice.call(
        //   track.getElementsByTagName("enclosure"),
        // )
        //   this.newList=Array.prototype.slice
        // .call(items)
        // .map(this.renderPodcastTrack)
      }
    },
  }
</script>
<style>
  .ivu-spin-dot {
    background-color: #1184ff;
    width: 100px;
    height: 100px;
  }

  .ivu-spin-large .ivu-spin-dot {
    width: 150px;
    height: 150px;
  }

  .demo-spin-container {
    display: "inline-block";
    width: "200px";
    height: " 100px";
    position: " relative";
    border: "1px solid #eee";
  }
</style>