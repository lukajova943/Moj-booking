<script setup>
import { ref,onMounted,onUnmounted,computed } from 'vue'
import { supabase } from '../../utils/supabase';

const searchih=ref(false)
const username=ref('')

let authListener = null

  function search()
   {
      searchih.value = !searchih.value;
   }

const userInitials = computed(() => {
   if(!username.value) return '?'
   return username.value.slice(0, 2).toUpperCase()
})

const logOut = async () => {
   const { error } = await supabase.auth.signOut()
   if( error ) console.error('Error logging out:',error.message)
}

onMounted(() => {
  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      username.value = session.user.user_metadata.username || ''
    } else {
      username.value = ''
    }
  })
  authListener = data.subscription
})

onUnmounted(() => {
  if (authListener) {
    authListener.unsubscribe()
  }
})

</script>

<template>
<div id="glavno">
<div id="gg">
 <h1 id="naslov">Booking
   <img  @click="search()"id="search" src="../assets/search.png">
 </h1>

   <div v-if="username" class="user-profile">
      <div class="avatar" >{{ userInitials }}</div>
      <span class="username-text">{{ username }}</span>
      <span class="line">|</span>
      <button @click="logOut" class="button-logout">Odjavi se</button>
   </div>
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

   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@600&family=Inter:wght@800&display=swap');

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
      font-family: 'Poppins', sans-serif;
      color:white;
      text-shadow:2px 2px 4px rgba(0,0,0,0.3);
   }
   #gg
   {
      align-items:center;
      display:flex;
      position:relative;
      justify-content: center;
      width:100%;
   }
   .user-profile{
      display:flex;
      flex-direction: row;
      position:absolute;
      right:0;
      gap:15px;
      padding:7px;
      padding-left:12px;
      border-radius:50px;
      background: rgba(255, 255, 255, 0.22);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
   }
   .avatar{
      background-color:white;
      color: #285a8c;            
      border-radius: 50%;
      height:35px;
      width:35px;
      align-content: center;
      text-align:center;
      cursor:pointer;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size:18px;
   }
   .button-logout{
      background:none;
      border:none;
      text-decoration: underline;
      color:rgb(255, 255, 255);
      cursor:pointer;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      transform: translateX(-5px);
      }
   .line{
      color:rgb(255, 255, 255);
      align-content: center;
      font-size:28px;
   }
   .username-text{
      color:rgb(255, 255, 255);
      align-content: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   }
   .button-logout:hover {
      color:rgba(220, 225, 230, 0.826);
      transition:0.3s;
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
      transform: translateX(15px);
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


.nav-link{
   color:white !important;
   text-decoration:none !important;
}
</style>