<template>
  <div class="container">
    <div class="map-container">
      <iframe
        class="map"
        :src="mapUrl"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <button class="view-location" @click="openMap">View Location</button>
  </div>
</template>

<script>
export default {
  name: "MapView",
  computed: {
    mapUrl() {
      return "https://maps.app.goo.gl/7rxSWUjR8a4j7bqP7";
    },
  },
  methods: {
    openMap() {
      window.open(this.mapUrl, "_blank");
    },
  },
};
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

.map-container {
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
}

.map {
  width: 100%;
  height: 100%;
}

.view-location {
  padding: 10px 20px;
  background-color: #84593e;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.view-location:hover {
  background-color: #6b4732;
}
</style>
