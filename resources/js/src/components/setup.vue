
<template>
  <div class="center">
    <vs-button @click="active=!active">
      <img src="../assets/logo.png" alt="" :width="10">
    </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4 class="not-margin">
          <b>POS</b> Setup
        </h4>
      </template>
      <div class="pos-setup">
        <ul>
          <li>
            <router-link to="/user" class="nav-item nav-link">
              <img src="../assets/logo.png" alt="" :width="10"/>Users
            </router-link>
          </li>
          <li>
            <router-link to="/stock" class="nav-item nav-link">
              <img src="../assets/logo.png" alt="" :width="10"/>Stocks
            </router-link>
          </li>
          <li>
            <router-link to="/customer" class="nav-item nav-link">
              <img src="../assets/logo.png" alt="" :width="10"/>Customers
            </router-link>
          </li>
          <li>
            <router-link to="/supplier" class="nav-item nav-link">
              <img src="../assets/logo.png" alt="" :width="10"/>Suppliers
            </router-link>
          </li>
        </ul>
      </div>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: false,
  })
}
</script>
<style scoped>
  ul {
    list-style-type: none;
    padding: 10px;
  }
  li {
    width: 100%;
    height: 2em;
    color: #000;
  }
  li:hover {
    background: gray;
    color: blue;
  }
  .nav-item {
    color: #000;
    font-weight: 400;
  }
</style>

        