<template>
  <video-carousel-skeleton v-if="isLoading" />

  <div class="space-y-2" v-else>
    <h1 class="text-xl font-medium font-netflix_medium">
      {{ section.titre }} 
    </h1>

    <video-carousel :videos="section.videos" />
  </div>
</template>

<script>
import useQuery from "../hooks/useQuery";
import VideoCarouselSkeleton from "../skeletons/VideoCarouselSkeleton.vue";
import VideoCarousel from "./VideoCarousel.vue";

export default {
  props: ["section"],
  components: {
    VideoCarousel,
    VideoCarouselSkeleton,
  },
  // setup(props) {
  //   // const [section, isLoading, isError] = useQuery(props.name, props.queryFn);
  //       const titre
  //   return { props  };
  // },
};
</script>

<style>
</style>