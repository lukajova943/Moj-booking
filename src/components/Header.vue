<script setup>
import { ref,onMounted,onUnmounted,computed,watch } from 'vue'
import { supabase } from '../../utils/supabase';
import { useRouter,useRoute } from 'vue-router'


const searchih=ref(false)
const username=ref('')
const regUsername = ref('')      

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
   else{
      router.push({ path: '/', query: {} })
      prijavaOtvorena.value = false
      registracijaOtvorena.value = false
   }
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

  const router = useRouter()
  const route = useRoute()

  const prijavaOtvorena = ref(false)
  const registracijaOtvorena = ref(false)

  const email = ref('')
  const password = ref('')

  const handlePrijava = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) {
      alert('Greška pri prijavi: ' + error.message)
    } else {
      console.log('Korisnik prijavljen:', data.user)
      prijavaOtvorena.value = false

      if(route.query.login === 'true')
        router.push('/letovi')
      else
        router.push('/') 
    }
  }

  const handleRegistracija = async () => {
    if (!regUsername.value) {
      alert('Molimo unesite korisničko ime!')
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          username: regUsername.value
        }
      }
    })

    if (error) {
      alert('Greška pri registraciji: ' + error.message)
    } else {
      alert('Registracija uspješna! Provjerite email za potvrdu (ako je uključena).')
      registracijaOtvorena.value = false;
      regUsername.value = '';
    }

    
  }

watch(
  () => route.query.login,
  (noviLogin) => {
    if (noviLogin === 'true') {
      prijavaOtvorena.value = true
    }
  },
  { immediate: true } 
)
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
   <div v-else class="auth-buttons">
      <button class="registracija-gumb" @click="registracijaOtvorena = true" >Registriraj se</button>
      <button class="akcija-gumb" @click="prijavaOtvorena = true">Prijava</button>
   </div>

   <div v-if="prijavaOtvorena" class="modal-overlay" @click.self="prijavaOtvorena = false">
    <div class="modal-prozor">
      <h3>Prijava</h3>
      <input v-model="email" type="email" placeholder="Unesite email" class="modal-input"  @keyup.enter="handlePrijava"/>
      <input v-model="password" type="password" placeholder="Unesite lozinku" class="modal-input"  @keyup.enter="handlePrijava"/>
      <div class="modal-gumbi">
        <button class="akcija-gumb-modal" @click="handlePrijava">Prijavi se</button>
        <button class="zatvori-gumb" @click="prijavaOtvorena = false">Zatvori</button>
      </div>
    </div>
  </div>

  <div v-if="registracijaOtvorena" class="modal-overlay" @click.self="registracijaOtvorena = false">
    <div class="modal-prozor">
      <h3>Registracija</h3>
      <input v-model="email "type="email" placeholder="Vaš email" class="modal-input" @keyup.enter="handleRegistracija" />
      <input v-model="regUsername" type="text" placeholder="Vaš username" class="modal-input" @keyup.enter="handleRegistracija" />
      <input v-model="password" type="password" placeholder="Lozinka" class="modal-input"  @keyup.enter="handleRegistracija"/>
      <div class="modal-gumbi">
        <button class="akcija-gumb-modal" @click="handleRegistracija">Kreiraj račun</button>
        <button class="zatvori-gumb" @click="registracijaOtvorena = false">Zatvori</button>
      </div>
    </div>
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
  
  #prijava{
    width:400px;
    height:40px;
    border-radius:8px;
    cursor:text;
    position:absolute;
    right:150px;
    top:25px;
    height:25px;
    box-sizing: border-box;
  }

  #slika{
    position:absolute;
    height:100px;
    width:auto;
    right:30px;
    top:8px;
  }
  .auth-buttons {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: row; 
  gap: 10px;           
  align-items: center;
}

.registracija-gumb,
.akcija-gumb {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4); 
  padding: 8px 16px;
  border-radius: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: all 0.25s ease;
  width: auto; 
}

.registracija-gumb:hover,
.akcija-gumb:hover {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-1px);
}


.registracija-gumb:active,
.akcija-gumb:active {
  transform: translateY(1px);
}
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); 
  backdrop-filter: blur(8px); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; 
}

.modal-prozor {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.modal-prozor h3 {
  margin: 0 0 10px 0;
  font-family: sans-serif;
  color: #333;
}

.modal-input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}

.modal-gumbi {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.akcija-gumb-modal {
  flex: 1;
  background-color: rgb(32, 116, 200);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

.zatvori-gumb {
  background-color: #e0e0e0;
  color: #333;
  border: none;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
}
.akcija-gumb-modal:hover{
  background-color: #005999;
  transition:0.4s;
}
.zatvori-gumb:hover {
  background-color: #d4d4d4;
  transition:0.4s;
}
</style>