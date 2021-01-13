import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Pos from '../components/pos.vue'
// import StockList from '../components/stock/list.vue'
// import StockEdit from '../components/stock/edit.vue'
import CustomerList from '../components/customer/list.vue'
import CustomerEdit from '../components/customer/edit.vue'
import SupplierList from '../components/supplier/list.vue'
import SupplierEdit from '../components/supplier/edit.vue'
import UserList from '../components/user/list.vue'
import UserEdit from '../components/user/edit.vue'
import SaleList from '../components/sale/list.vue'
import Sale from '../components/sale/index.vue'
// import Purchase from '../components/purchase/index.vue'
// import SignUp from '../components/SignUp'

window.Vue = Vue;

Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/', 
      component: Home
    },
    {
      name: 'pos',
      path: '/pos', 
      component: Pos, 
    },
    {
      name: 'user',
      path: '/user', 
      component: UserList, 
    },
    {
      name: 'useredit',
      path: '/useredit', 
      component: UserEdit, 
    },
    // {
    //   name: 'stock',
    //   path: '/stock', 
    //   component: StockList, 
    // },
    // {
    //   name: 'stockedit',
    //   path: '/stockedit', 
    //   component: StockEdit, 
    // },
    {
      name: 'customer',
      path: '/customer', 
      component: CustomerList, 
    },
    {
      name: 'customeredit',
      path: '/customeredit', 
      component: CustomerEdit, 
    },
    {
      name: 'supplier',
      path: '/supplier', 
      component: SupplierList, 
    },
    {
      name: 'supplieredit',
      path: '/supplieredit', 
      component: SupplierEdit, 
    },
    {
      name: 'saleList',
      path: '/saleList', 
      component: SaleList, 
    },
    {
      name: 'sale',
      path: '/sale', 
      component: Sale, 
    }
  ]
})