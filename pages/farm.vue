<template>
  <main>
    <div class="custom-container p-2 pt-4">
      <h1 class="border-bottom d-inline pb-1 mx-3 my-5">Explore the farm</h1>
      <div class="card m-5 p-4">
        <h3>Aerial View</h3>
        <div class="embed-wrapper">
          <b-embed
            src="https://www.youtube.com/embed/YX0nJ0imz04"
            frameborder="0"
            type="iframe"
            aspect="16by9"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <h2 class="mx-5 my-4 border-bottom d-inline pb-1">Barn</h2>
      <div class="card m-5 p-4">
        <div class="building d-flex w-100 py-5 justify-content-around">
          <div>
            <b-img fluid src="~/assets/images/farm/barn from side.JPG" alt="hay storage building" />
          </div>
          <div>
            <b-img
              fluid
              src="~/assets/images/farm/barn tractor bldg and work shop.JPG"
              alt="hay storage building"
            />
          </div>
        </div>
      </div>

      <h2 class="mx-5 my-4 border-bottom d-inline pb-1">Out Buildings</h2>
      <div class="card m-5 p-4">
        <h3>Tractor Garage & Pole Building for Large Equipment</h3>
        <div class="building d-flex w-100 py-5 justify-content-around">
          <div>
            <b-img
              fluid
              src="~/assets/images/farm/DJI_0081 (Medium).jpg"
              alt="aerial view of tractor garage"
            />
          </div>
          <div>
            <b-img
              fluid
              src="~/assets/images/farm/part of tractor garage with upper buildings 001.JPG"
              alt="tractor garage"
            />
          </div>
        </div>
      </div>
      <div class="card m-5 p-4">
        <h3>Upper Buildings</h3>
        <div class="building d-flex w-100 py-5 justify-content-around">
          <div>
            <b-img
              fluid
              src="~/assets/images/farm/upper building with firewood 001.JPG"
              alt="front of upper building"
            />
          </div>
          <div>
            <b-img
              fluid
              src="~/assets/images/farm/back of upper building 001.JPG"
              alt="back of upper building"
            />
          </div>
        </div>
      </div>
      <div class="card m-5 p-4">
        <h3>Hay Storage Building</h3>
        <div class="building d-flex w-100 py-5 justify-content-around">
          <div>
            <b-img fluid src="~/assets/images/farm/242.JPG" alt="hay storage building" />
          </div>
          <div>
            <b-img fluid src="~/assets/images/farm/245.JPG" alt="hay storage building" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return { title: 'Farm Tour' }
  }
}
</script>

<style scoped>
.embed-wrapper {
  width: 90%;
  max-width: 1440px;
  /* max-height:  */
  margin: 40px auto;
}
img {
  border-radius: 5px;
}
.card {
  box-shadow: 5px 5px 4px 4px rgba(158, 158, 158, 0.493);
}
.building > * {
  flex-basis: 46%;
}
h1 {
  font-size: 60px;
}
h2 {
  font-size: 50px;
}
h3 {
  font-size: 40px;
}
@media screen and (max-width: 900px) {
  .building {
    flex-wrap: wrap;
  }
  .building > * {
    flex-basis: 100%;
    margin-bottom: 2em;
  }
}
</style>