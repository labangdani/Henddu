<template>
    <div class="w-full h-full md:pb-44">
    <Banner :type="type" v-if="isDesktop" />

    <div
      class="px-4 md:px-12 relative z-10 space-y-12"
      :class="[isDesktop ? '-mt-28' : 'mt-20']"
    >
        <video-carousel-skeleton v-if="isLoading" />


        <div class="space-y-2" v-else>
            <video-carousel :videos="listvideos" />
        </div>
    </div>
    </div>
</template>

<script>
import VideoCarousel from "../../components/VideoCarousel.vue";
import VideoCarouselSkeleton from "../../skeletons/VideoCarouselSkeleton.vue";
import Banner from "../../components/Banner.vue";

import useDevice from "../../hooks/useDevice";
import { mapState} from 'vuex';


// const ITEMS = [
//   replay = movies,
//   home = sect
// ]
export default {

  components: {
    VideoCarousel,
    VideoCarouselSkeleton,
    Banner,
  },
  setup() {
    const { isDesktop } = useDevice();
    return { isDesktop };
  },

    computed:{
        ...mapState({
          listvideos:'videos',
        }), 
      },

         mounted(){
            this.$store.dispatch('get_videos');
          }, 
};
</script>
<style>
</style>