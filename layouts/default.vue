<template>
  <div class="body">
    <div class="footer-pusher">
      <header>
        <b-navbar toggleable="md" type="dark" variant="secondary">
          <div class="container-fluid mw-1440 px-2">
            <b-navbar-brand :to="{ path: '/' }">Milton PA Farm</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" />
            <b-collapse is-nav id="nav-collapse">
              <b-navbar-nav class="ml-auto">
                <b-nav-item
                  :active="$route.path === '/property'"
                  :to="{ path: '/property' }"
                  >The Property</b-nav-item
                >
                <b-nav-item
                  :active="$route.path === '/house'"
                  :to="{ path: '/house' }"
                  >House Tour</b-nav-item
                >
                <b-nav-item
                  :active="$route.path === '/farm'"
                  :to="{ path: '/farm' }"
                  >The Farm</b-nav-item
                >
                <b-nav-item
                  :active="$route.path === '/history'"
                  :to="{ path: '/history' }"
                  >The History</b-nav-item
                >
                <b-nav-item
                  :active="$route.path === '/contact'"
                  :to="{ path: '/contact' }"
                  >Contact</b-nav-item
                >
              </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
      </header>
      <nuxt />
    </div>
    <footer class="mt-5">
      Copyright &#9400; {{ new Date().getFullYear() }}
    </footer>
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
  background-color: rgb(251, 251, 251);
  height: 100%;
}
.custom-container {
  max-width: 1440px;
  margin: 0 auto;
}
.pointer {
  cursor: pointer;
}
</style>
<style scoped>
.body {
  display: flex;
  flex-direction: column;
}
.mw-1440 {
  max-width: 1440px;
  width: 1440px;
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
