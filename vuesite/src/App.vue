<template>
  <div id="app">
    <Clickable />
  </div>
</template>

<script>
import Clickable from "./components/Clickable.vue";

export default {
  name: "App",
  components: {
    Clickable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
