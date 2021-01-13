
<template>
  <div class="hidden">

    <vs-navbar color="#000000" text-white square center-collapsed v-model="active">
      <template #left>
        <img src="../assets/logo.png" alt="" :width="30">
      </template>
      <template #right>
      <vs-navbar-item :active="active == 'home'" id="home">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'pos'" id="pos">
        <router-link to="/pos" class="nav-item nav-link">POS</router-link>
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'other'" id="license">
        <router-link to="/home" class="nav-item 
        nav-link">E-Commerce</router-link>
      </vs-navbar-item>
      <div>      
        <vs-button @click="open">
          <img src="../assets/logo.png" alt="" :width="10">
        </vs-button></div>--
      </template>
    </vs-navbar>

    <vs-sidebar
      right
      square
      absolute
      v-model="active"
      :open.sync="activeSidebar"
      v-show="activeSidebar"
    >
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
        <router-link to="/customer" class="nav-item nav-link">
            <img src="../assets/logo.png" alt="" :width="10"/>
        </router-link>
        Customers
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <router-link to="/supplier" class="nav-item nav-link">
            <img src="../assets/logo.png" alt="" :width="10"/>
        </router-link>
        Supplier
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <router-link to="/stock" class="nav-item nav-link">
            <img src="../assets/logo.png" alt="" :width="10"/>
        </router-link>
        Stocks
      </vs-sidebar-item>
      <vs-sidebar-item id="donate">
        <router-link to="/user" class="nav-item nav-link">
            <img src="../assets/logo.png" alt="" :width="10"/>
        </router-link>
        Users
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class='bx bx-bell' ></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
// import store from './store'

export default {
  data:() => ({
    active: 'home',
    activeSidebar: false,
    menuItems: [
      { icon: "home", title: "Home", link: "/" },
      { icon: "pos", title: "POS", link: "/pos" },
      // { icon: "e-commerce", title: "E-Commerce", link: "/addNewItem" },
    ]
  }),
  methods: {
    open() {
      if(this.activeSidebar) {
        this.activeSidebar = false
      }else {
        this.activeSidebar = true
      }
    }
  }
}

</script>

<style>
.nav-item {
  color: #fff;
  text-decoration: none;
}
.content {
  margin: 50px 0px;
}
</style>

        