<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';

import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'

</script>

<template>
  <div id="app">
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
  min-height:100%;
  overflow-y:auto;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>