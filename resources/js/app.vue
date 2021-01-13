
<template>
  <div>
    <div class="center examplex">
      <side-bar />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import { Component, Vue, Class } from 'vue-property-decorator'
// import { State, namespace } from 'vuex-class'
import store from './src/store'
import sidebar from './src/components/sidebar.vue'

export default {
  name: 'app',
  data:() => ({
    active: 'home',
    store: store,
    menuItems: [
      { icon: "home", title: "Home", link: "/" },
      { icon: "pos", title: "POS", link: "/pos" },
      // { icon: "e-commerce", title: "E-Commerce", link: "/addNewItem" },
    ]
  }),
  components: {
  'side-bar': sidebar,
  }
}
</script>

<style>
.content {
  margin: 50px 0px;
}
</style>

        