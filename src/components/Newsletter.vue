<script setup>

</script>
<template>
  <div class="okvir">
    <h2>Ekskluzivna ponuda!</h2>
    <div class="tekst"><p>Prijavom na ovu ponudu postajete puni član naše Booking zajednice,</p>
    <p>Po eksluzivnoj cijeni dobijajte najbolje i najisplativije ponude putovanja po cijelom svijetu</p>
    </div>
    <input type="text" id="prijava" placeholder='Unesite svoj e-mail...'></input>
    <button @click="prijaviSe" class="akcija-gumb" >Prijavi se odmah</button>
    <img  id="slika" src="../assets/booking.png">
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
</style>