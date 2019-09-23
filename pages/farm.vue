<template>
  <main>
    <div class="custom-container p-2 pt-4">
      <h1 class="border-bottom d-inline pb-1 mx-3 my-5">Explore the farm</h1>
      <div class="card m-5 p-4">
        <h2 class="h2">Aerial View</h2>
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
    </div>
  </main>
</template>

<style scoped>
.embed-wrapper {
  width: 90%;
  max-width: 1440px;
  /* max-height:  */
  margin: 40px auto;
}
.card {
  box-shadow: 5px 5px 4px 4px rgba(158, 158, 158, 0.493);
}
</style>