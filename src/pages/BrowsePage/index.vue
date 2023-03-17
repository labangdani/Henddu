<template>
  <div class="w-full h-full md:pb-44">
    <Banner :type="type" v-if="isDesktop" />

    <div
      class="px-4 pt-10 md:px-12 relative z-10 space-y-12"
      :class="[isDesktop ? '-mt-28' : 'mt-20']"
    >
      <SectionContainer :sections="listsections" />
    </div>
  </div>
</template>
<script>
import SectionContainer from "../../components/SectionContainer.vue";
import Banner from "../../components/Banner.vue";
import useDevice from "../../hooks/useDevice";
import { mapState} from 'vuex';

// const ITEMS = [
//   replay = movies,
//   home = sect
// ]
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
          listsections:'sections',
          // listvideos:'videos',
        }),

        //  type() {

        //       if (this.$route.path.includes("replay")) {
        //         return listvideos;
        //       }

        //       if (this.$route.path.includes("direct")) {
        //         return "direct";
        //       }

        //       if (this.$route.path.includes("stream")) {
        //         return "stream";
        //       }

        //       return ;
        //       listsections;
        //     },

        //     items() {
        //       return this.type;
        //     },

       
      },

         mounted(){
            this.$store.dispatch('get_sections');
            // this.$store.dispatch('get_videos');
          }, 
};
</script>
<style>
</style>