<template>

      <div class="flex justify-center">Canal2 Copyright © 2023 e-Canal2 </div>
      <!-- <span class="text-red-500">
       <IconHeart/>
      </span> -->
 
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