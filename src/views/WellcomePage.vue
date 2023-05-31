<template>
  <div class="container">
    <img class="logo" src="https://hy.galipatstory2.com/wp-content/uploads/2022/11/dsssss-e1651657642397.png" alt="Logo">
    <h1 class="nama-mempelai">Reflika & Raden</h1>
    <h1 class="kepada">Kepada Bapak/Ibu/Saudara/i</h1>
    <h1 class="nama-tamu">Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara pernikahan kami.</h1>

    <a class="button" @click="openUndangan">Buka Undangan</a>
  </div>
</template>

<script>
export default {
  methods: {
    openUndangan() {
      // Aksi yang akan dijalankan saat tombol "Buka Undangan" diklik
      // Anda dapat menambahkan logika untuk membuka undangan atau melakukan tindakan lainnya di sini
      console.log('Tombol "Buka Undangan" diklik');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}


.logo {
  height: auto;
  max-width: 35%;
  border: none;
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  margin-bottom: 20px;
}

.nama-mempelai {
  font-size: 55px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Dancing Script', sans-serif;
  color: #84593E;
}

.kepada{
  font-size: 18px;
}


.nama-tamu{
  font-size: 18px;
}


.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
}
</style>
