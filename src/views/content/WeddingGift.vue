<template>
  <div class="container">
    <div class="text">Wedding Gift</div>
    <div class="description">Doa restu anda merupakan karunia yang sangat berarti bagi kami</div>
    <img class="image" src="https://hy.galipatstory2.com/wp-content/uploads/2022/12/Bank-BCA-Logo-PNG-240p-FileVector69.png" alt="Gambar">
    <div class="text">Transfer ke rekening BCA a.n Nelia Agustin</div>
    <div class="text">3020580479</div>
    <button class="copy-button" @click="copyText">Copy</button>
  </div>
</template>

<script>
export default {
  name: "CustomBackground",
  methods: {
    copyText() {
      const textToCopy = "3020580479";
      navigator.clipboard.writeText(textToCopy);
      alert("Text copied!");
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text {
  color: #000;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  color: #000;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.image {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.copy-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
