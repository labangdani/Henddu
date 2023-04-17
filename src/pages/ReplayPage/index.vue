<template>
  <section class="p-20">
    <h1 class="text-4xl font-light font-sans"> Programmes TV</h1>
    <video-carousel-skeleton v-if="isLoading" />
    <div class="" v-else>
        <div class="grid grid-cols-3 py-5">
          <div class="col-span-2 space-y-4">
              <ul class="flex space-x-8">
                <li >
                  <a :class="{buttonclass: connect === 'tous' || connect === ''}" class="rounded-full font-bold px-4 py-1 bg-gray-700" v-on:click="search('',tagname)" ><button class="uppercase text-sm text-white rounded-full font-bold ">Tous</button></a>
                </li>
                <li v-for="categorie in listcategories" :key="categorie.id" >
                  <a :class="{buttonclass: connect === categorie.name}" class="rounded-full font-bold px-4 py-1 bg-gray-700" v-on:click="search(categorie.name, tagname)" v-if="categorie.name != 'BanniereContainer'" ><button class="uppercase text-sm text-white font-bold">{{categorie.name}}</button></a>
                </li>
              </ul>
          </div>
          
          <div class="flex justify-end">
            <button @click="toggleDropdown()" class="flex text-md font-bold text-white" ref="btnDropdownRef">{{ selectedOption }}
              <svg class="h-6 w-6 pl-1 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="6 9 12 15 18 9" /></svg>            </button>

            <ul :class="{'hidden': !dropdownPopoverShow, 'block': dropdownPopoverShow}" class="bg-black z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1" style="min-width:12rem" ref="popoverDropdownRef">
              <button v-for="channel in channels" class="text-md font-bold py-2 capitalize px-4 hover:bg-gray-800 block w-full whitespace-nowrap bg-transparent text-white" :key="channel.id" @click="selectOption(channel.channel_name, channel.id)">
                {{ channel.channel_name }}
              </button>
              <button class="text-md font-bold py-2 px-4 hover:bg-gray-800 block w-full whitespace-nowrap bg-transparent text-white"  @click="selectOption('Chaînes', 0)">
                Chaînes
              </button>
            </ul>
          </div>

        </div>

        <ul class="block-chaine mb-4 space-x-2">
          <li >
            <a :class="{buttonclass: choicetag === 'tous' || choicetag === ''}" class="rounded-full px-4 py-0.5 font-bold bg-gray-700" v-on:click="search(categoryname,'')"><button class="capitalize text-sm text-white body rounded-full">Tous</button></a>
          </li>
          <li v-for="tag in listtags" :key="tag.id" >
            <a :class="{buttonclass: choicetag === tag.name}" class="rounded-full px-4 py-0.5 font-bold bg-gray-700" v-on:click="search(categoryname,tag.name)" ><button class="capitalize text-sm body text-white">{{tag.name}}</button></a>
          </li>
        </ul>
    
      <div class="h-0 mb-4 border border-solid border-t-0 border-slate-800 opacity-25"></div>
      
      <div
    ref="container"
    class="carousel-container mb-14 pt-6 relative"
    :class="[childHovering ? 'animate-z-hover' : 'animate-z-unhover']">
    <div class="grid grid-cols-6">
      
      <!-- <div v-if="videos==null"> 
         <p>Aucunes Videos</p>
      </div> -->

      <!-- <div v-else>  -->
        <div class="mb-10" v-for="video in videos" :key="video.id">
          <div class="">
            <video-card :video="video" :id="video.id" />
          </div>
          <div class="flex mt-2.5 text-lg font-bold justify-center text-center">{{video.title}}</div>
        </div>
      <!-- </div> -->

      <template>
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
      </template>
    </div>
    </div>
    </div>
  </section>
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
import { createPopper } from "@popperjs/core";
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
      videos:"",
      channels:"",
      onglet:"",
      connect:"",
      choicetag:"",
      categoryname:'',
      tagname:'',
      showDropdown: false,
      selectedOption: "Chaînes",
      dropdownPopoverShow: false,

    }
  },

  computed:{
      ...mapState({
        listcategories:'categories',
        listtags:'tags',
      }), 
    },

  mounted(){
  this.$store.dispatch('get_categories');
  this.$store.dispatch('get_tags');
  this.getAllVideos();
  this.getAllChannels();
  }, 

  methods:{

    toggleDropdown(){
      if(this.dropdownPopoverShow){
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-end"
        });
      }
    },

    selectOption(channel, channel_id) {
      this.selectedOption = channel;
      this.dropdownPopoverShow = false;
      if(channel_id != 0){
        Api.get('/streamvod/rest/channel/' +channel_id)
      .then((response) => {
        this.videos = response.data.content
        console.log(this.videos)  
      }) 
      }
      else{
        this.getAllVideos()
      }
     
    },

    getAllVideos(){
      Api.get('/streamvod/rest/videos/all')
      .then((response) => {
        this.videos = response.data.content
        console.log(this.videos)  
      }) 
    },

    getAllChannels(){
      Api.get('/streamvod/api/channel/channel-all')
      .then((response) => {
        this.channels = response.data.content
        console.log(this.channels)  
      }) 
    },

    // getAllVideosChannel(channel_id){
    //   Api.get('/streamvod/rest/channel/' +channel_id)
    //   .then((response) => {
    //     this.videos = response.data.content
    //     console.log(this.videos)  
    //   }) 
    // },
    


    async search(category, tag){
      let uri;
      this.categoryname = category;
      this.tagname = tag;

      switch (true) {
        // case tag !== '' && category !== '' && name !== '':
        //   uri = Uri.https(host, searchUrlTagCategoryKeyword, queryParameterskeyWordTagAndCategory);
        //   queryParameters = { headers };
        //   devtools.log('0');
        //   break;
        // case category !== '' && name !== '':
        //   uri = Uri.https(host, searchUrlCategoryKeyword, queryParametersKeywordAndCategory);
        //   queryParameters = { headers };
        //   devtools.log('1');
        //   break;
        // case tag !== '' && tagId !== 0 && name !== '':
        //   uri = Uri.https(host, searchUrlTagKeyword, queryParametersKeywordAndTag);
        //   queryParameters = { headers };
        //   devtools.log('2');
        //   break;
        // case name !== '':
        //   uri = Uri.https(host, searchUrlKey, queryParameterskeyWord);
        //   queryParameters = { headers };
        //   devtools.log('3');
        //   break;
        case this.categoryname !== '' && this.tagname !== '':
          this.connect = this.categoryname;
          this.choicetag = this.tagname;
          console.log(this.categoryname, this.tagname)
          uri = '/streamvod/rest/videos/search-tags-cat?categories='+this.categoryname +'&tags='+this.tagname;
          break;

        case this.categoryname !== '' && this.tagname == '':
          this.connect = this.categoryname;
          this.choicetag = 'tous';  
          uri = '/streamvod/rest/videos/search-cat?categories=' +this.categoryname;
          break;

        case this.categoryname == '' && this.tagname !== '':
          this.choicetag = this.tagname;
          this.connect = 'tous';
          uri = '/streamvod/rest/videos/tags?tags=' +this.tagname;
          break;

        default:
          this.connect = 'tous';
          this.choicetag = 'tous';  
        uri = '/streamvod/rest/videos/all';
      }

      Api.get(uri)
          .then((response) => {
            this.videos = response.data.content
          })

        }

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

  .block-chaine{
    display: grid;
    grid-auto-flow: column;
    /* grid-auto-columns: 16%; */
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
    @apply hover:bg-[#07693A];
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