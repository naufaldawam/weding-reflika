<template>
  <div class="container">
    <div class="text">Insya Allah acara akan dilaksanakan pada :</div>
    <img class="image-cincin" src="https://hy.galipatstory2.com/wp-content/uploads/2022/10/cincin_akad-removebg-preview-1-2.png" alt="Gambar">
    <div class="acara">Akad Nikah</div>
    <div class="description">
      <i class="fas fa-calendar"></i>
      Rabu, 19 July 2023</div>
    <div class="description">
      <i class="fas fa-clock"></i>
      Pukul : "isi jamnya"</div>
    <div class="description">Ini nanti diisi lokasi acara</div>
    <div class="acara">Resepsi</div>
    <div class="description">
      <i class="fas fa-calendar"></i>
      Rabu, 19 July 2023</div>
    <div class="description">
      <i class="fas fa-clock"></i>
      Pukul : "isi jamnya"</div>
    <div class="description">Ini nanti diisi lokasi acara</div>
  </div>
</template>


<script>
export default {
  name: "PageAlamat",
}
</script>


<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f1f1f1;
  }
  
  .image-cincin {
    max-width: 25%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .text {
    text-align: center;
    color: #000000;
    font-family: "Roboto Slab", Sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3em;
  }
  
  .acara {
    color: #84593E;
    font-family: "Dancing Script", Sans-serif;
    font-size: 39px;
    font-weight: 500
  }
  
  .description {
    text-align: center;
    color: #000000;
    font-family: "Roboto Slab", Sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.3em;
  }
  </style>
  
