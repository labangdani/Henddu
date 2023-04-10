<template>
  <div class="w-full h-full md:pb-44">
    <Banner v-if="isDesktop" />
  
    <div class="px-20" v-if="this.$store.state.user.id == -1">
      <SectionContainer :getstreams="listimages"/>
    </div>
    <div class="px-20" v-else>
      <SectionContainer :sections="listsections"/>
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
      this.user = JSON.parse(localStorage.getItem('user'));
      if(this.user){
        this.$store.dispatch('get_sections');
        console.log("connect")
      }
      else{
        this.$store.dispatch('get_getstreams'); 
        console.log("not connect")
      }
          
    }, 
};
</script>
<style>
</style>