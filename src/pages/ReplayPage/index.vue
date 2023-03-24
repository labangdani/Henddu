<template>
  <section class="p-20">
    <h1 class="text-4xl font-light font-sans"> Programmes TV</h1>
    <video-carousel-skeleton v-if="isLoading" />
    <div class="" v-else>
      <div class="grid grid-cols-2 p-5">
        <div>
          <ul class="flex space-x-4 text-sm" >
            <li >
              <button class="rounded-full font-bold px-4 py-0.5 bg-[#07693A]" >Tous</button>
            </li>
            <li v-for="categorie in listcategories" :key="categorie.id">
              <button v-if="categorie.name != 'BanniereContainer'" class="rounded-full font-bold px-4 py-0.5 bg-[#07693A]" v-on:click="getCategorieVideo(categorie.id)">{{categorie.name}}</button>
            </li>
          </ul>
        </div>

        <div>

        </div>
      </div>
      <div class="h-0 mb-4 border border-solid border-t-0 border-slate-800 opacity-25"></div>
      <video-carousel :videos="videos" />
    </div>
  </section>
</template>

<script>
import VideoCarousel from "../../components/VideoCarousel.vue";
import VideoCarouselSkeleton from "../../skeletons/VideoCarouselSkeleton.vue";
import Banner from "../../components/Banner.vue";

import useDevice from "../../hooks/useDevice";
import {mapState} from 'vuex';
import {Api} from '../../helpers';


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
  data(){
    return {
      videos:""
    }
  },

    computed:{
        ...mapState({
          listcategories:'categories',
        }), 
      },

         mounted(){
          this.$store.dispatch('get_categories');
          }, 

           methods:{
            getCategorieVideo(id_categorie){
              Api.get('/streamvod/rest/videos/'+id_categorie+'/videos')
              .then((response) => {
                this.videos = response.data.content
                console.log(this.videos)  
              })
            }
           }
};
</script>
<style>
 .btn-order1{
    background-color: #07693A;
    }
</style>