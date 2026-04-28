<script setup>
import { ref } from 'vue'
const searchih=ref(false)
  function search()
   {
      searchih.value = !searchih.value;
   }

</script>

<template>
<div id="glavno">
   <div id="gg">
 <h1 id="naslov">Booking
   <img  @click="search()"id="search" src="../assets/search.png">
 </h1>
 </div>
 <input v-if="searchih" id="bar" type="text" placeholder="Pretraži destinacije...">
 <div id="nav">
    <RouterLink to="/" class="nav-link"><p class="dugme">Pocetna</p></RouterLink>
    <RouterLink to="/liste" class="nav-link"><p class="dugme">Liste</p></RouterLink>
    <RouterLink to="/letovi" class="nav-link"><p class="dugme">Letovi</p></RouterLink>
    <RouterLink to="/onama" class="nav-link"><p class="dugme">O nama</p></RouterLink>
 </div>
 </div>
 <div class="ispod">
 </div>
</template>

<style>

   #glavno
   {
     background:linear-gradient( 
     rgb(0, 0, 0, 0.2), rgb(0, 0, 0, 0.2) ),
     url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920');
     background-repeat:no-repeat;
     background-size:cover;
     background-position:center 80%;
     margin:0;
     padding:20px;
     box-sizing:border-box;
     display:flex;
     flex-direction:column;
     align-items:center;
     position:sticky;
     top:0;
     z-index:1000;
     height:26vh;
     width:100%;
     box-shadow: 0 4px 10px rgba(0,0,0,0.1);
     justify-content:space-between;
     padding-bottom: 0;
   }
   body{
      margin:0;
      padding:0;
      }
   #naslov
   {

      color:white;
      font-family:Tahoma;
   }
   #gg
   {
      align-items:center;
   }
   #bar
   {
      width:30%;
      border:0;
      padding:10px;
      border-radius:15px;
      margin-bottom:10px;
   }
   #search
   {
      float:right;
      height:30px;
      width:30px;
      margin-top:8px;
      margin-left:10px;
      cursor:pointer;
   }
   #nav
   {
      display:flex;
      flex-direction:row;
      width:100%;
      margin-bottom:-25px;
      list-style: none;
      justify-content:space-between;
      background-color:rgb(40, 90, 140);
      border-radius:15px;
      padding: 0px 100px 0px 100px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
   }
   
   .dugme
   {
      padding:20px;
      color:white;
      cursor:pointer;
      transition:0.3s;
      font-family:'Roboto',sans-serif;
      margin: 0px;
   }
   .dugme:hover
   {
      color:rgb(255, 255, 255);
      background-color:rgb(50, 110, 170);
   }

   #zadnji{
      
   }

.nav-link{
   color:white !important;
   text-decoration:none !important;
}
</style>