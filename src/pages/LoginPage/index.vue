<template>
    <div class="w-full h-full md:pb-44">
      <Banner :type="type" v-if="isDesktop" />
      
      <div class="px-20">
        <FormConnect />
      </div>
    </div>
  </template>
  <script>
import FormConnect from '/src/components/Forms/FormConnect.vue';
  import useDevice from "../../hooks/useDevice";

  export default {
  
    components: {
        FormConnect,
    },
    setup() {
      const { isDesktop } = useDevice();
      return { isDesktop };
    },
  
   
  };
  </script>
  <style>
  </style>