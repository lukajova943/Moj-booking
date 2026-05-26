<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../../utils/supabase' 
  import Button from './Button.vue'

  const ljetneDestinacije = ref([])

  const dohvatiDestinacije = async () => {
    
    const { data,error } = await supabase
    .from('Ljetne_destinacije')
    .select('Destinacija,Nocenja,Ocjena,Slika_url')

  if(error){
    console.error('Greska pri dohvacanju:',error.message)
  }
  else{
    ljetneDestinacije.value = data 
  }
}

  onMounted(() => {
    dohvatiDestinacije()
  })
</script>

<template>
<h1 id="popular">Popularne ljetne destinacije</h1>
<div id="glavni">
  <div v-for="dest in ljetneDestinacije" :key="dest.id" class="kartica-wrap">
    <div class="dest" :style="{ backgroundImage: `url(${dest.Slika_url})` }">
      <div class="rating">⭐{{ dest.Ocjena }}</div>
      <div class="info-overlay">
          <div class="grad">{{ dest.Destinacija }}</div>
          <div class="nocenja">{{ dest.Nocenja }} noćenja</div>
      </div>
    </div>
    <Button/>
  </div>
</div>
</template>

<style scoped>

.kartica-wrap {
  position: relative;
  display: flex; 
  justify-content: center;
  align-items: center;
  flex-shrink: 0; 
  border-radius: 20px; 
  overflow: hidden;
}

.kartica-wrap:hover .dest {
  filter: blur(4px);
  opacity:0.8;
  transform: scale(1.02);
  transition:0.5s;
}

.kartica-wrap:hover .btn-detalji {
  opacity: 1;
  transform: translate(-50%, -50%) translateY(0);
}


  .info-overlay{
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  z-index: 2;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display:flex;
  flex-direction:column;
  }
  .grad{
    font-weight:bold;
    font-size:20px;
    align-items:center;
    margin-bottom:5px;
    cursor:default;
  }
  .nocenja{
    font-size:18px;
    opacity:0.9;
    cursor:default;
  }
  .rating{
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 15px;
  z-index: 2;
  }
h1{
  font-family: Tahoma;
  font-size:27px;
}
  #popular{
   margin-left:25px;
   margin-top:40px;
  }
  #glavni::-webkit-scrollbar {
  display: none;
}
  #glavni
  {
    display:flex;
    flex-direction: row;
    gap:30px;
    margin-left:25px;
    margin-right:25px;
    overflow-x: auto;
    white-space:nowrap; 
    align-items: center;
  }
  .dest{
    height:300px;
    width:270px;
    border-radius:20px;
    background-position: center;
    background-size:cover;
    flex-shrink:0;
    position:relative;
    overflow:hidden;
    }
  .dest::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(to bottom,rgba(0, 0, 0, 0)50%,rgba(0, 0, 0, 1) 100%)
  }
</style>