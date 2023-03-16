<template>
  <div class="w-full h-full md:pb-44">
    <Banner :type="type" v-if="isDesktop" />

    <div
      class="px-4 md:px-12 relative z-10 space-y-12"
      :class="[isDesktop ? '-mt-28' : 'mt-20']"
    >
      <SectionContainer :sections="sections" />
    </div>
  </div>
</template>
<script>
import SectionContainer from "../../components/SectionContainer.vue";
import Banner from "../../components/Banner.vue";
import useDevice from "../../hooks/useDevice";
import { mapState} from 'vuex';


export default {
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
          sections:'sections'
        })
      },

   mounted(){
    this.$store.dispatch('get_sections');
  }, 
};
</script>
<style>
</style>