<template>
  <div id="Clickable">
    <img v-on:click="clickHandler" :src="require('../assets/logo.png')" />
    <h1>clicks: {{ counter }}</h1>
  </div>
</template>

<script>
import * as clickevents from "../clickevents.js";

export default {
  name: "Clickable",
  data: function () {
    return {
      counter: 0,
    };
  },
  methods: {
    clickHandler: function () {
      this.counter = clickevents.handleClick(this.counter);
    },
  },
};
</script>

<style lang="css">
</style>