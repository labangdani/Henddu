<template>
  <div v-if="this.$store.state.user.id == -1">
    <Section v-for="(getstream, index) in getstreams" :key="index" :getstream="getstream" />
  </div>
  <div v-else>
    <h1 class="text-3xl font-light font-sans mb-7 justify-center">
      En direct sur nos chaines <button class="uppercase bg-red-700 ml-1 font-bold px-2.5 rounded-lg text-lg">Direct</button>
    </h1>
    <LiveCardVue></LiveCardVue>

    <Section v-for="(section, index) in sections" :key="index" :section="section" />
  </div>
</template>

<script>
import Section from "./Section.vue";
import Button from "./Button.vue";
import LiveCardVue from '../components/LiveCard.vue';


export default {
  props: ["getstreams","sections"],
  components: { 
    Section, 
    Button,
    LiveCardVue,
   },

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