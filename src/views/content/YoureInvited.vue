<template>
  <div class="container">
    <!-- start header -->
    <div class="text-invited-to">You are invited to</div>
    <div class="text-invited-to">the wedding of</div>
    <div class="header">
      <img class="logo" src="https://hy.galipatstory2.com/wp-content/uploads/2022/11/dsssss-e1651657642397.png" alt="Logo">
      <h1 class="judul">Reflika & Raden</h1>
      <p class="tanggal">Wednesday, 19 July 2023</p>
    </div>
    <!-- end of header -->

    <!-- start count time wedding -->
    <div>
      <div class="countdown-box">
        <div class="box">
          <div class="value">{{ days }}</div>
          <div class="label">Days</div>
        </div>
        <div class="box">
          <div class="value">{{ hours }}</div>
          <div class="label">Hours</div>
        </div>
        <div class="box">
          <div class="value">{{ minutes }}</div>
          <div class="label">Minutes</div>
        </div>
        <div class="box">
          <div class="value">{{ seconds }}</div>
          <div class="label">Seconds</div>
        </div>
      </div>
      <div class="reminder-button-container">
        <a class="reminder-button" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Reflika%20%26%20Raden&dates=20230719T090000/20230719T100000" target="_blank">
          Set Reminder
        </a>
      </div>
    </div>
    <!-- end of count time wedding -->
  </div>

  <!-- start of page hadist nikah -->
  <PageHaditsNikah/>
  <!-- end of page hadist nikah -->


  <!-- start of page mempelai wanita -->
  <PageMempelaiWanita/>
  <!-- end of page mempelai wanita -->

  <!-- start of page sambung -->
  <PageDan/>
  <!-- end of page sambung -->

  <!-- start of page mempelai Pria -->
  <PageMempelaiPria/>
  <!-- end of page mempelai pria -->

  <!-- start of page alamat -->
  <PageAlamat/>
  <!-- end of page alamat -->
    
  <!-- start of page map -->
  <MapView/>
  <!-- end of page map -->

  <!-- start of wedding gift -->
  <WeddingGift/>
  <!-- end of wedding gift -->

  <!-- start of ucapan terima kasih -->
  <UcapanTerimaKasih/>
  <!-- end of ucapan terima kasih -->



  <!-- start of short telling -->
  <!-- end of short telling -->

</template>

<script>
import PageHaditsNikah from "./PageHaditsNikah.vue";
import PageMempelaiWanita from "./PageMempelaiWanita.vue";
import PageDan from "./PageDan.vue";
import PageMempelaiPria from "./PageMempelaiPria.vue";
import PageAlamat from "./PageAlamat.vue";
import MapView from "./MapView.vue";
import WeddingGift from "./WeddingGift.vue";
import UcapanTerimaKasih from "./UcapanTerimaKasih.vue";

export default {
  data() {
    return {
      countdownDate: new Date("2023-07-19T09:00:00"), // Tanggal dan waktu yang ditentukan
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownInterval: null,
    };
  },
  name: "YoureInvited",
  components: {
    PageHaditsNikah,
    PageMempelaiWanita,
    PageDan,
    PageMempelaiPria,
    PageAlamat,
    MapView,
    WeddingGift,
    UcapanTerimaKasih,

  },
  mounted() {
    // Mulai perhitungan waktu saat komponen telah dimuat
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      // Hitung selisih waktu antara sekarang dan countdownDate
      const timeDifference = this.countdownDate - new Date().getTime();

      // Hitung jumlah hari, jam, menit, dan detik
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Perbarui nilai setiap detik
      this.countdownInterval = setInterval(() => {
        this.startCountdown();
      }, 1000);
    },
  },
  beforeUnmount() {
    // Hentikan perhitungan waktu saat komponen akan dihancurkan
    clearInterval(this.countdownInterval);
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('https://hy.galipatstory2.com/wp-content/uploads/2022/11/Slide1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  box-sizing: border-box;
}

.text-invited-to {
  color: #000000;
  font-family: "Roboto Slab", Sans-serif;
  font-size: 24px;
  font-weight: 100;
  text-align: center;
  margin-bottom: 10px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 100%;
  max-width: 400px;
  height: auto;
}

.judul {
  font-size: 32px;
  margin-top: 10px;
  font-family: "Dancing Script", Sans-serif;
  color: #84593E;
  font-weight: 500;
}

.tanggal {
  font-size: 18px;
  color: #000000;
  font-family: "Roboto Slab", Sans-serif;
  font-weight: 100;
}

.countdown-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  background-color: #84593e;
  color: #fff;
  border-radius: 20px;
}

.label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.value {
  font-size: 36px;
}

.reminder-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.reminder-button {
  padding: 10px 20px;
  background-color: #84593e;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  display: block;
  margin: 0 auto;
}

@media (max-width: 400px) {
  .text-invited-to {
    font-size: 20px;
  }

  .judul {
    font-size: 24px;
  }

  .tanggal {
    font-size: 16px;
  }

  .box {
    width: 70px;
    height: 60px;
  }

  .label {
    font-size: 14px;
  }

  .value {
    font-size: 24px;
  }

  .reminder-button {
    font-size: 14px;
    padding: 8px 16px;
  }
  

}

.custom-background{
  background-color: #faf1ea;
  width: 100%;
  height: 100vh;
}


</style>
