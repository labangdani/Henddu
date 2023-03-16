<template>
  <Section v-for="(section, index) in sections" :key="index" :section="section"/>
</template>

<script>
import Section from "./Section.vue";
import Button from "./Button.vue";

export default {
  props: ["sections"],
  components: { Section, Button },
};
</script>

<style>
</style>