<script setup>
</script>

<template>
  <div id="nazivi">
    <p>Destinacija</p>
    <p>Datum</p>
    <p>Vrijeme</p>
    <p>Avio-kompanija</p>
    <p>Status</p>
  </div>

  <div class="let-red">
    <p>Berlin (BER)</p>
    <p>15.05.2026.</p>
    <p>12:45</p>
    <p>Lufthansa</p>
    <p class="status">Na vrijeme</p>
  </div>

  <div class="let-red">
    <p>Zagreb (ZAG)</p>
    <p>16.05.2026.</p>
    <p>09:15</p>
    <p>Croatia Airlines</p>
    <p class="status">Kasni</p>
  </div>

  <div class="let-red">
    <p>Gdansk (GDA)</p>
    <p>19.05.2026.</p>
    <p>14:00</p>
    <p>Ryan Air</p>
    <p class="status">Na vrijeme</p>
  </div>

  <div class="let-red">
    <p>Dubai (DUB)</p>
    <p>13.05.2026.</p>
    <p>11:15</p>
    <p>Emirates</p>
    <p class="status">Na vrijeme</p>
  </div>

  <div class="let-red">
    <p>Seoul (SEO)</p>
    <p>16.05.2026.</p>
    <p>17:00</p>
    <p>Turkish Airlines</p>
    <p class="status">Kasni</p>
  </div>

  <div class="let-red">
    <p>Nice (NIC)</p>
    <p>11.05.2026.</p>
    <p>08:00</p>
    <p>Air France</p>
    <p class="status">Na vrijeme</p>
  </div>

  <div class="let-red">
    <p>Riyadh (RIY)</p>
    <p>14.05.2026.</p>
    <p>12:30</p>
    <p>Emirates</p>
    <p class="status">Na vrijeme</p>
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