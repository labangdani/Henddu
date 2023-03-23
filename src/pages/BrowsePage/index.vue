<template>
  <div class="w-full h-full md:pb-44">
    <Banner :type="type" v-if="isDesktop" />
  
    <div class="px-20" v-if="connected==false">
      <SectionContainer :getstreams="listimages" />
    </div>
    <div class="px-20" v-else>
      <SectionContainer :sections="listsections" />
    </div>
  </div>
</template>
<script>
import SectionContainer from "../../components/SectionContainer.vue";
import Banner from "../../components/Banner.vue";
import useDevice from "../../hooks/useDevice";
import { mapState} from 'vuex';


export default {

  data() {
    return {
      connected:false,
      user:'',
    }
  },

  components: {
    SectionContainer,
    Banner,
  },

  setup() {
    const { isDesktop } = useDevice();
    return { isDesktop };
  },

    computed:{
        ...mapState({
          listsections:'sections',
          listimages:'getstreams',
        }), 
      },

    mounted(){

      if(localStorage.getItem('user')){
        this.connected = true
        this.$store.dispatch('get_sections');  
        console.log("bingo")
      }
      else{
        this.$store.dispatch('get_getstreams');      
        console.log("failed")
      }
    }, 

};
</script>
<style>
</style>