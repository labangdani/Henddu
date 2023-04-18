<template>

  <div class="mb-8">
    <banner-skeleton v-if="isLoading" />
    <div v-if="!isLoading" class="banner-container relative">
      <div v-if="this.$store.state.user.id == -1">
        <div class="">
          <img
            src="../assets/images/CcommentPlateau.jpg"
            class="w-full h-[750px] object-cover"
          />
        </div>

        <div class="banner__overlay absolute inset-0 flex items-center px-20">
          <transition
            appear
            enter-active-class="animate__animated animate__slideInUp"
            leave-active-class="animate__animated animate__slideInDown"
            mode="out-in"
          >
            <div class="w-[50%] space-y-6">
              <h1 class="text-7xl font-sans">
                Welcome
              </h1> 
            </div>
          </transition>
        </div>
      </div>

      <div v-else>
        <div v-for="(video, index) in videos" :key="index">
          <div v-if="isVisible==false">
            <img
            :src=video.image.url
            class="object-cover h-[750px] w-full"
          />
          <div class="banner__overlay h-full w-full absolute inset-0 flex items-center px-20">
            <transition
              appear
              enter-active-class="animate__animated animate__slideInUp"
              leave-active-class="animate__animated animate__slideInDown"
              mode="out-in"
            >
              <div class="w-[80%] space-y-6">
                <div class="text-8xl body">
                  {{ video.title || video.name }}
                </div>

                <!-- <p class="text-lg line-clamp-4 font-medium">
                  {{ video.overview }}
                </p> -->

                <div class="flex items-center">
                  <Button class="bg-white text-black" v-on:click="getVisibility(video.id)" >
                    <IconPlayFill />
                    <p class="text-bold">Play</p>
                  </Button>
                </div>
              </div>
            </transition>
          </div>
          </div>

          <video  v-else class="w-full h-[750px] object-cover" ref="videoPlayer" autoplay loop controls></video>

        </div>
      </div>

      <div class="banner__overlay--down absolute bottom-0 h-32 w-full"></div>

      
    </div>
  </div>
      
</template>

<script>
import { computed } from "vue";
import { ref } from "vue";

import IconPlayFill from "~icons/ph/play-fill";

import { getLatestMovies } from "../services/movies";
import { getLatestTVShows } from "../services/tv";

import Image from "./Image.vue";
import Button from "./Button.vue";

import useQuery from "../hooks/useQuery";

import { setModalActive, setModalData } from "../store";
import {Api} from '../helpers'

import { randomIndex } from "../utils";
import BannerSkeleton from "../skeletons/BannerSkeleton.vue";

export default {
  components: { Image, Button, IconPlayFill, BannerSkeleton },
  // props: ["type"],
  data(){
    return{
      videos:[],
      user:'',
      isVisible:false,
      video:{}
    }
  },
  setup({ type }) {
    let queryFn;

    let finalType;

    if (type === "home" || type === "popular") {
      const index = randomIndex(1);

      queryFn = index ? getLatestTVShows : getLatestMovies;
      finalType = index ? "tv" : "movies";
    } else if (type === "tv") {
      queryFn = getLatestTVShows;
      finalType = "tv";
    } else {
      queryFn = getLatestMovies;
      finalType = "movies";
    }

    const [data, isLoading, isError] = useQuery([`${type}_banner`], queryFn);

    const banner = computed(() => {
      if (isLoading.value) return;

      const validResults = data.value.results.filter(
        (item) => item.backdrop_path
      );

      const index = randomIndex(validResults.length);
      return validResults[index];
    });

    const handleMoreInfoClick = () => {
      setModalActive(true);
      setModalData({
        id: banner.value.id,
        type: finalType,
      });
    };

    return {
      handleMoreInfoClick,
      banner,
      isLoading,
      isError,
    };
  },

  mounted(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if(this.user){
      this.getBannerVideo();
    }
               
  }, 

  methods:{
    getBannerVideo(){
        Api.get('/streamvod/rest/videos/76/videos')
        .then((response) => {
          this.videos = response.data.content
          console.log(this.videos)
        })   
      },

  //  async readVideo(video_id){
  //   //*********** VIDEOS EN LECTURE ***************
  //     const result = await Api.get('/streamvod/rest/videos/'+video_id)
  //     this.video=result.data.content
  //     console.log(this.video)
  //     this.$refs.videoPlayer.src = this.video.url
  //     console.log(this.$refs.videoPlayer.src)

  //   },
  
    async getVisibility(video_id){
      this.isVisible=true
      console.log(video_id)

      Api.get('/streamvod/rest/videos/'+video_id)
      .then((response) => {
        this.video = response.data.content
        console.log(this.video)
        this.$refs.videoPlayer.src = this.video.url
        console.log(this.$refs.videoPlayer.src)
        })   
     
      
    }
    
    }


  };
  
</script>

<style>
.banner__overlay--down {
  background-image: linear-gradient(
    to bottom,
    transparent 10%,
    rgba(var(--background-color-rgb), 0.8),
    rgba(var(--background-color-rgb), 1)
  );
}

.banner__overlay {
  background-image: linear-gradient(
    77deg,
    rgba(0, 0, 0, 0.6) 25%,
    transparent 85%
  );
}
</style>