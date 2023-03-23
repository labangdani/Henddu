<template>
  <div v-if="connected==false">
    <Section v-for="(getstream, index) in getstreams" :key="index" :getstream="getstream"/>
  </div>
  <div v-else>
    <Section v-for="(section, index) in sections" :key="index" :section="section"/>
  </div>
</template>

<script>
import Section from "./Section.vue";
import Button from "./Button.vue";

export default {
  props: ["getstreams","sections"],
  components: { Section, Button },

  data() {
    return {
      connected:false,
      user:'',
    }
  },

  mounted(){

    if(localStorage.getItem('user')){
      this.connected = true
      console.log("bingo")
    }
    else{
      console.log("failed")
    }
  }, 

};
</script>

<style>
</style>