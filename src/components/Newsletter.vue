<script setup>
  import { ref,onMounted,watch } from 'vue'
  import { supabase } from '../../utils/supabase'
  import { useRouter,useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  const prijavaOtvorena = ref(false)
  const registracijaOtvorena = ref(false)

  const email = ref('')
  const password = ref('')
  const username = ref('')

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
    if (!username.value) {
      alert('Molimo unesite korisničko ime!')
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          username: username.value
        }
      }
    })

    if (error) {
      alert('Greška pri registraciji: ' + error.message)
    } else {
      alert('Registracija uspješna! Provjerite email za potvrdu (ako je uključena).')
      registracijaOtvorena.value = false
    }

    
  }

  onMounted(() => {
  if (route.query.login === 'true') { 
    prijavaOtvorena.value = true 
  }
})

watch(
    () => route.query.login, 
    (noviLogin) => {
      if (noviLogin === 'true') {
        prijavaOtvorena.value = true
      }
    }
  ) 
</script>
<template>
  <div class="okvir">
    <h2>Ekskluzivna ponuda!</h2>
    <div class="tekst"><p>Prijavom na ovu ponudu postajete puni član naše Booking zajednice,</p>
    <p>Po eksluzivnoj cijeni dobijajte najbolje i najisplativije ponude putovanja po cijelom svijetu</p>
    </div>
    <button class="registracija-gumb" @click="registracijaOtvorena = true" >Registriraj se</button>
    <button class="akcija-gumb" @click="prijavaOtvorena = true">Prijavi se odmah</button>
    <img  id="slika" src="../assets/booking.png">
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
      <input v-model="username" type="text" placeholder="Vaš username" class="modal-input" @keyup.enter="handleRegistracija" />
      <input v-model="password" type="password" placeholder="Lozinka" class="modal-input"  @keyup.enter="handleRegistracija"/>
      <div class="modal-gumbi">
        <button class="akcija-gumb-modal" @click="handleRegistracija">Kreiraj račun</button>
        <button class="zatvori-gumb" @click="registracijaOtvorena = false">Zatvori</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .okvir{
    padding:18px;
    margin-top:50px;
    margin-left:25px;
    margin-right:25px;
    margin-bottom:20px;
    border: 1px solid #8f8686;
    border-radius:20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    background-color: #ffffff;
    display:flex;
    flex-direction:column;
    align-items:left;
    position:relative;
  }

  .tekst{
    display:flex;
    flex-direction:column;
    gap:5px;
    align-items:left;
    max-width: 60%;
  }
  h2{
    margin:0;
    margin-left:15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: bold;
    font-size:25px;
  }

  p{
    margin:0;
    color:rgb(0, 0, 0);
    font-family:Tahoma;
    font-weight: 500;
    margin-left:15px;
    opacity:0.7;
  }
  .akcija-gumb {
    background-color:rgb(32, 116, 200);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 16px;
    font-size: 1rem;
    font-weight: bold;
    cursor:pointer;
    transition: background 0.2s;
    position:absolute;
    top:58px;
    right:202px;
    width:280px;
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

  .akcija-gumb:hover {
    background-color: #005999;
    transition:0.5s;
  }

  .akcija-gumb:active {
    transform: scale(0.98);
  }

  #slika{
    position:absolute;
    height:100px;
    width:auto;
    right:30px;
    top:8px;
  }

  .registracija-gumb{
    background-color:rgb(32, 116, 200);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 16px;
    font-size: 1rem;
    font-weight: bold;
    cursor:pointer;
    transition: background 0.2s;
    position:absolute;
    top:10px;
    right:202px;
    width:280px;
  }

    .registracija-gumb:hover {
    background-color: #005999;
    transition:0.5s;
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

.zatvori-gumb:hover {
  background-color: #d4d4d4;
}
</style>