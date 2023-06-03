<template>
  <div class="navbar-dan-background">
    <div class="navbar-content">
      <div class="navbar-dan">
        &
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageDan",
}
</script>

<style>
.navbar-dan-background {
  background-color: #faf1ea;
  color: #84593e;
  padding: 10px;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-dan {
  text-align: center;
  font-size: 40px;
  font-weight: 400;
}

.navbar-verse {
  display: block;
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
