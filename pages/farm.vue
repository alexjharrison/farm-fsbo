<template>
  <main>
    <div class="custom-container p-2 mt-4">
      <h2 class="mb-4">Aerial View</h2>
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
  </main>
</template>

<style scoped>
.embed-wrapper {
  /* width: 95%; */
  max-width: 1440px;
  /* max-height:  */
  margin: 40px auto;
}
</style>