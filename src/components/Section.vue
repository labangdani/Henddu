<template>
  <video-carousel-skeleton v-if="isLoading" />

  <div v-else>
    <div v-if="connected==false">
      <h1 class="text-4xl font-light font-sans mb-7">
        {{ getstream.titre }} 
      </h1>
      <video-carousel :images="getstream.images" />
    </div>
    <div v-else>
      <h1 class="text-4xl font-light font-sans mb-7">
        {{ section.titre }} 
      </h1>
      <video-carousel :videos="section.videos" />
    </div>
  </div>
</template>

<script>
// import useQuery from "../hooks/useQuery";
import VideoCarouselSkeleton from "../skeletons/VideoCarouselSkeleton.vue";
import VideoCarousel from "./VideoCarousel.vue";

export default {
  props: ["getstream","section"],
  components: {
    VideoCarousel,
    VideoCarouselSkeleton,
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