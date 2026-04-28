<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Segment1 from '../components/Segment1.vue'
import Newsletter from '../components/Newsletter.vue'
</script>

<template>
  <div class="main-content">
    <Segment1 />
    <Newsletter />
  </div>
</template>

<style scoped>
  .main-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>