<script setup>
import Button from './Button.vue';


</script>
<template>
  <h1 id="popular">Popularne destinacije:</h1>
  <div id="glavni">
    <div class="kartica-wrap">
    <div id="Berlin" class="dest">
      <div class="rating">⭐ 4.8</div>
      <div class="info-overlay">
        <div class="grad">Berlin: 🇩🇪</div>
        <div class="nocenja">4900 noćenja</div>
        </div>
      </div>
      <Button  />
    </div>
    <div class="kartica-wrap">
    <div id="Zagreb" class="dest">
      <div class="rating">⭐ 4.3</div>
      <div class="info-overlay">
         <div class="grad">Zagreb: 🇭🇷</div>
        <div class="nocenja">2950 noćenja</div>
      </div>
      </div>
      <Button/>
      </div>
    <div class="kartica-wrap">
    <div id="Vancouver" class="dest">
      <div class="rating">⭐ 4.5</div>
      <div class="info-overlay">
        <div class="grad">Vancouver: 🇨🇦</div>
        <div class="nocenja">1820 noćenja</div>
      </div>
      </div>
      <Button/>
    </div>
    <div class="kartica-wrap">
    <div id="CapeTown" class="dest">
      <div class="rating">⭐ 4.2</div>
      <div class="info-overlay">
        <div class="grad">Cape Town: 🇿🇦</div>
        <div class="nocenja">3200</div>
      </div>
      </div>
      <Button/>
    </div>
    <div class="kartica-wrap">
    <div id="Jakarta" class="dest">
      <div class="rating">⭐ 4.9</div>
      <div class="info-overlay">
        <div class="grad">Jakarta: 🇮🇩</div>
        <div class="nocenja">5400 noćenja</div>
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
  }
  .nocenja{
    font-size:18px;
    opacity:0.9;
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

  #Berlin{
    background-image: url('https://rentabus.ba/api/v1/public/arrangements/uploads/arrangements/covers/q8dz9gonl4.png')
  }
  #Zagreb{
    background-image: url('https://i.natgeofe.com/n/a11e9ead-955f-4a4e-977c-d1b2f104ee75/zagrebgettyimages-1144074611hr.jpg')
  }
  #Vancouver{
    background-image: url('https://cdn.discoverholidays.io/media/general/0-9/72-hours-of-winter-in-vancouver-main.webp')
  }
  #CapeTown{
    background-image: url('https://cdn.craft.cloud/101e4579-0e19-46b6-95c6-7eb27e4afc41/assets/uploads/pois/cape-town-frommers.jpg?width=1200&height=630&quality=82&fit=cover&s=FzbTkPDsa6Y3hUOwSzomQfFw9dyx-Mu3iE8PhWE8usw')
  }
  #Jakarta{
    background-image: url('https://abcgeografija.com/wp-content/uploads/2022/01/Jakarta.jpg')
  }

</style>