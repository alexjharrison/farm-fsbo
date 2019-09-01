<template>
  <main>
    <div id="banner" class="d-flex">
      <div class="headers mt-auto mb-5 container d-flex flex-column align-items-end text-right">
        <h1>Picturesque Farm for Sale</h1>
        <h1>$1,999,000</h1>
      </div>
    </div>
    <div class="text-center">
      <h1>For Sale</h1>
      <h2>Picturesque Farm near Milton, PA</h2>
      <h2>704 Klinetob Rd, Milton, PA 17847</h2>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
  methods: {}
}
</script>

<style scoped>
#banner {
  background-image: url('~assets/home/banner-img.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 700px;
  max-height: 80vh;
}
#banner h1 {
  font-size: 55px;
  text-shadow: 2px 2px 2px rgb(71, 71, 71);
}
</style>
