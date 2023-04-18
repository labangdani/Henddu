<template>
  <section class="p-20">
    <h1 class="text-4xl font-light font-sans">Résultats de la recherche</h1>
      <div class="h-0 mb-4 border border-solid border-t-0 border-slate-800 opacity-25"></div>
      
    <div
    ref="container"
    class="carousel-container mb-14 pt-6 relative"
    :class="[childHovering ? 'animate-z-hover' : 'animate-z-unhover']">
    <div class="grid grid-cols-6">
      
      <div class="mb-10" v-for="video in listvideos" :key="video.id">
        <div class="">
          <video-card :video="video" :id="video.id" />
        </div>
        <div class="flex mt-2.5 text-lg font-bold justify-center text-center">{{video.title}}</div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import VideoCard from "../../components/VideoCard.vue";
import { useRoute } from "vue-router";
import VideoCarouselSkeleton from "../../skeletons/VideoCarouselSkeleton.vue";
import { Api } from "../../helpers";
import IconArrowRight from "~icons/ic/outline-arrow-forward-ios";
import IconArrowLeft from "~icons/ic/outline-arrow-back-ios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
// import useDevice from "../../hooks/useDevice";

export default {

  data(){
    return{
      listvideos:{},
    }
  },

  components: {
    VideoCard,
    VideoCarouselSkeleton,
    Swiper,
    SwiperSlide,
    IconArrowRight,
    IconArrowLeft,
  },

  mounted(){
    const route = useRoute()
    this.getVideoKeyWord(route)
  },

  methods:{
    getVideoKeyWord(route){
      Api.get('/streamvod/rest/videos/search-kw?search=' + route.query.q)
      .then((response) => {
        console.log(response.data.content); 
        this.listvideos = response.data.content;
      })
    }
  },

  // setup() {
  //   const route = useRoute();
  //   const { isDesktop } = useDevice();

  //   Api.get('/streamvod/rest/videos/search-kw?search=' + route.query.q)
  //   .then((response) => {
  //     this.listvideos = response.data.content
  //     console.log(this.listvideos)
  //   }).catch({

  //   })
  
  //   return {
  //     isDesktop,
  //   };
  // },

 
};
</script>
<style>
 .btn-order1{
    background-color: #07693A;
    }
 .active{
    background-color: #07693A;
    }

  .block-chaine{
    display: grid;
    grid-auto-flow: column;
    /* grid-auto-columns: 10%;  */
    gap: var(--size-3);
    overflow: auto;
    scroll-behavior: none; 
    width: 100%;
  }

  .block-chaine::-webkit-scrollbar{
    width: 0;
  }

  .buttonclass{
    /* background-color: #fff; */
    @apply rounded-full font-bold px-4 py-1 bg-gray-700 hover:bg-[#07693A];
    background-color: #07693A;
  }

  .swiper {
    overflow: visible;
  }

.swiper-button-disabled {
  display: none;
}

.swiper:hover .swiper-button svg,
.swiper:hover .swiper-pagination {
  visibility: visible;
}

.swiper-button svg {
  visibility: hidden;
}

.swiper-button-next,
.swiper-button-prev {
  @apply absolute h-full w-6 md:w-12 mt-0 top-0 bg-black bg-opacity-50;
  z-index: 2;
}

.swiper-button-prev {
  @apply -left-6 md:-left-12;
}

.swiper-button-next {
  @apply -right-6 md:-right-12;
}

.swiper-pagination {
  @apply space-x-1 w-24 h-0.5 absolute right-0 -top-4 flex invisible;
}

.swiper-pagination-bullet {
  @apply h-full bg-secondary hidden md:block;
  flex: 1 1 0%;
}

.swiper-pagination-bullet-active {
  @apply bg-white;
}

</style>