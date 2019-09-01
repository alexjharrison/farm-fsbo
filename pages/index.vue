<template>
  <main>
    <div id="banner" class="d-flex">
      <div class="headers mt-auto mb-5 container d-flex flex-column align-items-end text-right">
        <h1>Picturesque Farm for Sale</h1>
        <h1>$1,999,000</h1>
      </div>
    </div>
    <div class="text-center m-5">
      <em>
        <h1>For Sale</h1>
      </em>
      <h2>Picturesque Farm near Milton, PA</h2>
      <h2>704 Klinetob Rd, Milton, PA 17847</h2>
      <b-button :to="{path:'/contact'}" size="lg" variant="outline-dark" class="m-3">Contact Us</b-button>
    </div>
    <div class="custom-container mb-5">
      <div class="row text-center mx-2">
        <div class="col-md-4 my-2">
          <b-card title="The House" img-top img-src="~assets/home/house-thumb.jpg">
            <b-card-text>Explore the house in a virtual tour</b-card-text>
            <b-button :to="{path:'/house'}" variant="outline-primary">Check it out ➚</b-button>
          </b-card>
        </div>
        <div class="col-md-4 my-2">
          <b-card title="The Farm" img-top img-src="~assets/home/farm-thumb.jpg">
            <b-card-text>See what the farm has to offer</b-card-text>
            <b-button :to="{path:'/farm'}" variant="outline-primary">Check it out ➚</b-button>
          </b-card>
        </div>
        <div class="col-md-4 my-2">
          <b-card title="The History" img-top img-src="~assets/home/history-thumb.jpg">
            <b-card-text>Learn the history of the farm</b-card-text>
            <b-button :to="{path:'/history'}" variant="outline-primary">Check it out ➚</b-button>
          </b-card>
        </div>
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
