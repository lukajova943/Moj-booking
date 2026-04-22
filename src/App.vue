<script setup>
import HomePage from './views/HomePage.vue';
</script>

<template>
  <div id="app">
  <HomePage />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

</style>