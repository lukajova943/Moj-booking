<script setup>
import Segment1 from '../components/Segment1.vue'
import Newsletter from '../components/Newsletter.vue'
import Header from '../components/Header.vue';
import Ljetne from '../components/Ljetne.vue';
</script>

<template>
  <Header />
  <div class="main-content">
    <Segment1 />
    <Newsletter />
    <Ljetne />
  </div>
</template>

<style scoped>
  .main-content {
  display:flex;
  flex-direction: column;
  width:100%;
  margin-bottom:20px;
}
</style>