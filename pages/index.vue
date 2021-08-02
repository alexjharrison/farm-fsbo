<template>
  <main>
    <div id="banner" class="d-flex">
      <div
        class="mt-auto mb-5 container d-flex flex-column align-items-end text-right"
      >
        <h1 class="flex-shrink-1">This property is off the market</h1>
        <p class="h3">Thanks for your interest</p>
      </div>
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
  background-image: url('~assets/images/home/banner-img.jpg');
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

@media screen and (max-width: 700px) {
  #banner {
    height: 450px;
  }
  #banner h1 {
    font-size: 40px;
  }
}
</style>
