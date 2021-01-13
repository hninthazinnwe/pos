import Vue from "vue";
import Axios from "axios";

Vue.use(Axios);

const state = {
//  customers: [],
//  stocks: [],
  saleHeader: {},
  saleDetail: [],
  customers: [
    {id:1, name: 'John', code: 'Cust-001'},
    {id:2, name: 'Steve', code: 'Cust-002'},
  ],
  stocks: [
    {id:1, name: 'Book', code: 'Stk-001', price: 1000},
    {id:2, name: 'Pen', code: 'Stk-002', price: 500},
  ]
}

const getters= {
  header: state => state.saleHeader,
  detail: state => state.saleDetail
}

const mutations= {
  setCustomers(state, customers) {
    state.customers = customers
  },
  setStocks(state, stocks) {
    state.stocks = stocks
  },
  setSaleData(state, saleData) {
    state.saleHeader = saleData.saleHeader
    state.saleDetail = saleData.saleDetail
  },
  setVoucherNo(state, voucherNo) {
    state.saleHeader.voucherNo = voucherNo
  }
}
const actions= {
  async prepareNewSale({commit}) {

    // await Axios.get('/api/sale/voucherNo')
    // .then( response => {
    //    commit('setVoucherNo', response.data)
    // })
    // .catch(error => console.log(error.response));
    commit('setSaleData', 
      {
        saleHeader: {
          "id": '',
          "voucherNo": 'Vr-00001',
          "customer": '',
          "paymetnType": 1,
          "totalAmount": '',
          "totalQty": '',
          "startAt": new Date(),
          "endAt": new Date(),
        },
        saleDetail: []
      }
    )
  },
  async getCustomer() {
    return state.customers
    // await Axios.get('/api/sale/customer', {
    //  params: payload.cusCode
    // })
    // .then( response => {
    //    commit('setCustomers', response.data)
    // })
    // .catch(error => console.log(error.response));
  },
  async getStock() {
    return state.stocks
    // await Axios.get('/api/sale/stock')
    //  params: payload.stkCode
    // .then( response => {
    //    commit('setStocks', response.data)
    // })
    // .catch(error => console.log(error.response));
},
  async saveVoucher(payload) {
    console.log('##########', payload)
      // Axios.post('/api/sale', {
      //   saleHeader: payload.saleHeader,
      //   saleDetail: payload.saleDetail
      // })
      // .then({
      //   //
      // })
      // .catch(error => console.log(error.response));
      this.$router.push('/sale')
  },
  async updateVoucher({commit},saleData) {
    console.log('##########', saleData)
    commit('getVoucher')
    // var url = '/api/sale?id=' + payload.id
    // Axios.put(url, { 
    //   saleHeader: payload.saleHeader,
    //   saleDetail: payload.saleDetail
    // })
    // .then({
    //   //
    // })
    // .catch(error => console.log(error.response));
    this.$router.push('/sale')
},
  async deleteVoucher(payload) {
    var url = '/api/sale?id=' + payload.id
    Axios.delete(url)
    .then({
      // 
    })
    .catch(error => console.log(error.response));
    this.$router.push('/sale')
  },
}

export default{
  state,
  getters,
  actions,
  mutations,
}