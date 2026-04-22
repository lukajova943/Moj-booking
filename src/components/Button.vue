<script setup>

</script>
<template>
  <button class="btn-detalji">Pogledaj detalje</button>
</template>

<style scoped>
  .btn-detalji {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top:50%; 
  transform: translate(-50%, -50%) translateY(30px);
  opacity: 0;
  padding: 10px 20px;
  background-color: #003580; 
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  z-index: 10;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

  .btn-detalji:hover {
  background-color: #00224f;
}

</style>