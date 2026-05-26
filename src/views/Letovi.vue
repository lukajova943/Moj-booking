<script setup>
import { supabase } from '../../utils/supabase';
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';


const letovi = ref([])

async function dohvatiLetove(){
  const { data,error } = await supabase
   .from('Letovi')
   .select('Destinacija, Datum,Vrijeme,AvioKompanija, Status(Vrijednost)')

  if (error) {
    console.log(error.message)
    return
  }

  console.log(data)

  letovi.value = data
}

onMounted(() => { dohvatiLetove()})
</script>

<template>
  <Header />
  <div id="nazivi">
    <p>Destinacija</p>
    <p>Datum</p>
    <p>Vrijeme</p>
    <p>Avio-kompanija</p>
    <p class="status">Status</p>
  </div>

  <div class="let-red" v-for="leti in letovi">
    <p>{{ leti.Destinacija }}</p>
    <p>{{ leti.Datum }}.</p>
    <p>{{ leti.Vrijeme }}</p>
    <p>{{leti.AvioKompanija}}</p>
    <div><p>{{ leti.Status.Vrijednost }}</p></div>
  </div>


</template>

<style scoped>
  #nazivi
  {
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    color:rgb(197, 170, 138);
    margin-top:60px;
    margin-left:10%;
    margin-right:25%;
    border-bottom:2px solid rgb(197, 170, 138);
  }

  #nazivi p
  {
    margin:0;
    font-family:sans-serif;
    font-weight:bold;
    text-align:center;
  }

  .let-red
  {
    display:grid;
    grid-template-columns:repeat(5,1fr);
    margin-left:10%;
    margin-right:25%;
    color:rgba(79, 85, 79, 0.79);
    padding:10px 0;
    margin-top:2px;
    margin-bottom:2px;
  }

  .let-red p
  {
    margin:10px 0;
    text-align:center;
  }

  .let-red:hover
  {
    border-radius:15px;
    background-color:rgb(204, 204, 180);
    transition:.3s;
    cursor:default;
  }
</style>