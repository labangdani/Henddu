<template>
  <div class="w-full">
    <video-carousel-skeleton v-if="isLoading" />
    <div class="" v-else>
      <div class="grid grid-cols-2 pb-5 pt-2">
        <div>
          <ul class="flex space-x-8" >
            <li >
              <a :class="{buttonclass: connect === 'programmes' || connect === ''}"  v-on:click="getProgrammeUser()" ><button class="uppercase text-sm text-white rounded-full font-bold ">Mes Programmes</button></a>
            </li>
            <li >
              <a :class="{buttonclass: connect === 'videos'}" v-on:click="getVideosUser()" ><button class="uppercase text-sm text-white font-bold">Mes Videos</button></a>
            </li>
          </ul>
        </div>
      </div>
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
      <!-- <template>
        <div
          class="
            swiper-button swiper-button-prev
            group
            cursor-pointer
            flex
            items-center
            justify-center
          "
        >
          <IconArrowLeft class="w-10 h-10 group-hover:w-12 group-hover:h-12" />
        </div>

        <div
          class="
            swiper-button
            group
            cursor-pointer
            swiper-button-next
            flex
            items-center
            justify-center
          "
        >
          <IconArrowRight class="w-10 h-10 group-hover:w-12 group-hover:h-12" />
        </div>
      </template> -->
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import VideoCard from "../../components/VideoCard.vue";
import VideoCarouselSkeleton from "../../skeletons/VideoCarouselSkeleton.vue";
import IconArrowRight from "~icons/ic/outline-arrow-forward-ios";
import IconArrowLeft from "~icons/ic/outline-arrow-back-ios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import useDevice from "../../hooks/useDevice";
import {mapState} from 'vuex';
import {Api} from '../../helpers';


export default {

  components: {
    VideoCard,
    VideoCarouselSkeleton,
    Swiper,
    SwiperSlide,
    IconArrowRight,
    IconArrowLeft,
  },

  setup() {
    const { isDesktop } = useDevice();
    return {
      isDesktop,
    };
  },

  data(){
    return {
      listvideos:"",
      connect:""
    }
  },

  mounted(){
  
  }, 

  methods:{

    getProgrammeUser(){
      this.connect = 'programmes'
      
    },

    getVideosUser(){
      this.connect = 'videos';
      Api.get('/streamvod/rest/fav/videos/all')
      .then((response) => {
        console.log(response.data.content); 
        this.listvideos = response.data.content;
      })
     
    },

  }

};
</script>
<style>
 .btn-order1{
    background-color: #07693A;
    }
 .active{
    background-color: #07693A;
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