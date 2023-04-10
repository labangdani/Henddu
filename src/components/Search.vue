<template>
  <form class="flex items-center" v-if="this.$store.state.user.id != -1">   
    <div class="relative w-full">
        <input type="text" id="simple-search" class="text-white placeholder-white bg-transparent text-lg rounded-lg block w-full mx-20 p-3 py-1.5" placeholder="Rechercher un programme, une vidéo..." required>
    </div>
    <button type="submit" class="pl-10">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
</template>

<script>
import { ref } from "vue";
import IconRoundSearch from "~icons/ic/round-search";
import { useRouter } from "vue-router";
import useDevice from "../hooks/useDevice";

export default {
  setup() {
    const { isMobile } = useDevice();

    const searchInput = ref(null);
    const showSearch = ref(isMobile.value);
    const debounceTimeout = ref(null);
    const router = useRouter();

    const handleSearchClick = () => {
      showSearch.value = true;

      searchInput.value.focus();
    };

    const handleSearchChange = (e) => {
      const keyword = e.target.value;

      if (debounceTimeout.value) {
        clearTimeout(debounceTimeout.value);
      }

      debounceTimeout.value = setTimeout(() => {
        showSearch.value = false;
        router.push({ path: "/search", query: { q: keyword } });
      }, 500);
    };

    return {
      handleSearchClick,
      handleSearchChange,
      searchInput,
      showSearch,
      isMobile,
    };
  },
  components: {
    IconRoundSearch,
  },
};
</script>

<style>
</style>