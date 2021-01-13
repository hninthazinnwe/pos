import Vue from 'vue/dist/vue'
import Vuex from 'vuex'
import customer from './modules/customer/index'
import user from './modules/user/index'
import supplier from './modules/supplier/index'
import stock from './modules/stock/index'
import sale from './modules/sale/create'
import saleList from './modules/sale/list'

window.Vue = Vue;

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
       customer,
       user,
       supplier,
       stock,
       sale,
       saleList
    },
  })

export default store;