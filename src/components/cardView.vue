<template>

  <div class="card pointer" @click="selectedPodcast(`/podcast/${newData.collectionId}`)">

    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="artworkUrl">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{newData.artistName}}</p>
          <p class="subtitle is-6">{{newData.releaseDate}} - {{newData.trackPrice}}</p>
        </div>
      </div>

      <div class="content">
        {{newData.collectionName}}
      </div>
    </div>
    <br>

  </div>

</template>

<script>
  export default {
    props: {
      newData: {},
      artworkUrl: {},
    },
    methods: {
      selectedPodcast(url) {
        // selectedPodcast
        this.$store.dispatch('Podcasts/selectedPodcast', this.newData);
        this.$router.push(url)
      }
    },
  }
</script>
<style>
  .pointer {
    cursor: pointer;
  }
</style>