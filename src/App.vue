<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
  <Header />
  <main>
    <RouterView />
  </main>
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