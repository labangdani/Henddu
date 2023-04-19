<template>
  <video-carousel-skeleton v-if="isLoading" />

  <div v-else>
    <div v-if="this.$store.state.user.id == -1">
      <h1 class="text-3xl text-slate-500 body mb-6" >
        {{ getstream.titre }} 
      </h1>
      <video-carousel :images="getstream.images" />
    </div>
    <div v-else>
      <h1 class="text-3xl body mb-6" >
        {{ section.titre }} 
      </h1>
      <video-carousel :videos="section.videos" />
    </div>
  </div>
</template>

<script>
import VideoCarouselSkeleton from "../skeletons/VideoCarouselSkeleton.vue";
import VideoCarousel from "./VideoCarousel.vue";

export default {
  props: ["getstream","section"],
  components: {
    VideoCarouselSkeleton,
    VideoCarousel,
  },

  data() {
    return {
      connected:false,
      user:'',
    }
  },

  mounted(){

    if(localStorage.getItem('user')){
      this.connected = true
      console.log("bingo")
    }
    else{
      console.log("failed")
    }
  }, 


};
</script>

<style>
</style>