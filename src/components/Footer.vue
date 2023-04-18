<template>
  <div class="bg-gray-800 p-10"> 
    <div class="flex justify-center">Canal2 Copyright © 2023 e-Canal2 </div>
    <div class="flex justify-center mt-4">
      <div class="flex text-sm ">
        <router-link to="/condition" class="px-2 border-r-2">Conditions générales d'utilisation</router-link>
        <router-link to="/politique" class="px-2 border-r-2">Politiques de protection des données</router-link>
      </div>
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