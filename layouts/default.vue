<template>
  <div>
    <div class="footer-pusher">
      <header>
        <b-navbar toggleable="md" type="dark" variant="info">
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
body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
<style scoped>
.footer-pusher {
  min-height: calc(100vh - 58px);
}
footer {
  background-color: #ccc;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>