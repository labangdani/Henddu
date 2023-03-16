<template>
  <div
    class="
      mt-16
      md:mt-0
      flex
      justify-center
      sm:justify-between
      items-center
      w-screen
      py-2
      px-8
    "
  >
    <div class="flex items-center space-x-1">
      <span>Canal2 Copyright © 2023 e-Canal2 </span>
      <!-- <span class="text-red-500">
       <IconHeart/>
      </span> -->
    </div>

   
  </div>
</template>

<script>
import IconHeart from "~icons/ion/md-heart";
import IconGithub from "~icons/mdi/github";
import { GITHUB_URL } from "../constants";

export default {
  data() {
    return {
      GITHUB_URL,
    };
  },
  components: {
    IconGithub,
    IconHeart,
  },
};
</script>

<style>
</style>