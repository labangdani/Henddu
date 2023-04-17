<template>
  <form class="flex items-center" v-if="this.$store.state.user.id != -1">   
    <div class="relative w-full">
        <input type="text" @input="handleSearchChange" id="simple-search" class="outline-none text-white placeholder-white bg-transparent text-lg rounded-lg block w-full mx-20 p-3 py-1.5" placeholder="Rechercher un programme, une vidéo..." required>
    </div>
    <button type="submit"  class="pl-10">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>

</template>

 
<script>
import { ref } from "vue";
import useDevice from "../hooks/useDevice";
import { useRouter } from "vue-router";
import VideoCard from "../components/VideoCard.vue";
import IconArrowRight from "~icons/ic/outline-arrow-forward-ios";
import IconArrowLeft from "~icons/ic/outline-arrow-back-ios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {

  setup() {
    const { isMobile } = useDevice();

    const debounceTimeout = ref(null);
    const router = useRouter();

    const handleSearchChange = (e) => {
      const keyword = e.target.value;

      if (debounceTimeout.value) {
        clearTimeout(debounceTimeout.value);
      }

      debounceTimeout.value = setTimeout(() => {
      router.push({ path: "/search", query: { q: keyword } });
      }, 500);
    };

    return {
      handleSearchChange,
      isMobile,
    };
  },

  components: {
    VideoCard,
    IconArrowLeft,
    IconArrowRight,
    Swiper,
    SwiperSlide
  },
};

</script>

<style>

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