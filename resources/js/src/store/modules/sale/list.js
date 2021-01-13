import Vue from "vue";
import Axios from "axios";

Vue.use(Axios);

const state = {
  // saleList: [],
  saleList: [
     {
      "id": '',
      "voucherNo": 'Vr-00001',
      "customer": 'Hnin Nwe',
      "paymetnType": 1,
      "totalAmount": '5000',
      "totalQty": '5',
      "startAt": new Date(),
      "endAt": new Date(),
    },
    {
      "id": '',
      "voucherNo": 'Vr-00002',
      "customer": 'Cho Cho',
      "paymetnType": 1,
      "totalAmount": '1000',
      "totalQty": '2',
      "startAt": new Date(),
      "endAt": new Date(),
    },
    {
      "id": '',
      "voucherNo": 'Vr-00002',
      "customer": 'Ma Aye Aye',
      "paymetnType": 1,
      "totalAmount": '3000',
      "totalQty": '3',
      "startAt": new Date(),
      "endAt": new Date(),
    }
  ],
  sale: [],
}

const getters= {
  saleList: state => state.saleList,
  sale: state => state.sale
}

const mutations= {
  setSaleList(state, saleList) {
    state.saleList = saleList
  },
  setSale(state, sale) {
    state.sale = sale
  },
}
const actions= {
  async getSaleList() {
    return state.saleList
    // await Axios.get('/api/sale/list')
    // .then( response => {
    //    commit('setSaleList', response.data)
    // })
    // .catch(error => console.log(error.response));
  },
  async getVoucher({commit}) {
    commit('setSaleData', {
      saleHeader: {
        voucherNo: 'Vr-000002',
        paymetnType: 1,
        customer: 'Lwin Lwin Maw',
        totalAmount: 29000,
        totalQty: 3,
      },
      saleDetail: [
        {id:1, name: 'Shirt', code: 'Stk-010', price: 10000, qty: 2},
        {id:2, name: 'Blouse', code: 'Stk-009', price: 9000, qty: 1},
      ]
    })
    this.$router.push('/sale')
    // var url = '/api/sale?id=' + payload.id
    // Axios.patch(url)
    // .then( response => {
    //   commit('setSaleData', response.data)
    // })
    // .catch(error => console.log(error.response));
  },
  async deleteSale(payload) {
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