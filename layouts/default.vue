<template>
  <div class="body">
    <div class="footer-pusher">
      <header>
        <b-navbar toggleable="md" type="dark" variant="secondary">
          <div class="container">
            <b-navbar-brand :to="{path: '/'}">Milton PA Farm</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" />
            <b-collapse is-nav id="nav-collapse">
              <b-navbar-nav class="ml-auto">
                <b-nav-item :active="$route.path==='/house'" :to="{path:'/house'}">The House</b-nav-item>
                <b-nav-item :active="$route.path==='/farm'" :to="{path:'/farm'}">The Farm</b-nav-item>
                <b-nav-item :active="$route.path==='/history'" :to="{path:'/history'}">The History</b-nav-item>
                <b-nav-item :active="$route.path==='/contact'" :to="{path:'/contact'}">Contact</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
      </header>
      <nuxt />
    </div>
    <footer>Copyright &#9400; {{new Date().getFullYear()}}</footer>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {}
}
</script>

<style>
html,
body,
#__nuxt,
#__layout,
.body {
  height: 100%;
}
body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
main {
  background-color: rgb(245, 253, 255);
  height: 100%;
}
.custom-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
<style scoped>
.body {
  display: flex;
  flex-direction: column;
}
.footer-pusher {
  flex: 1 0 auto;
}
footer {
  background-color: #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>