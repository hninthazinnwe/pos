import Vue from "vue";
import Axios from "axios";

Vue.use(Axios);

const state = {
  // stocks: [],
  stocks: [  
    {
      "id": 1,
      "code": "C-0001",
      "name": "stock 1",
      "mmname": "Myanmar stock 1",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock1@example.com",
    },
    {
      "id": 2,
      "code": "C-0002",
      "name": "stock 2",
      "mmname": "Myanmar stock 2",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock2@example.com",
    },
    {
      "id": 3,
      "code": "C-0003",
      "name": "stock 3",
      "mmname": "Myanmar stock 3",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock3@example.com",
    },
    {
      "id": 4,
      "code": "C-0004",
      "name": "stock 4",
      "mmname": "Myanmar stock 4",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock4@example.com",
    },
    {
      "id": 5,
      "code": "C-0005",
      "name": "stock 5",
      "mmname": "Myanmar stock 5",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock5@example.com",
    },
    {
      "id": 6,
      "code": "C-0006",
      "name": "stock 6",
      "mmname": "Myanmar stock 6",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock6@example.com",
    },
    {
      "id": 7,
      "code": "C-0007",
      "name": "stock 7",
      "mmname": "Myanmar stock 7",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock7@example.com",
    },
    {
      "id": 8,
      "code": "C-0008",
      "name": "stock 8",
      "mmname": "Myanmar stock 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock8@example.com",
    },
    {
      "id": 9,
      "code": "C-0009",
      "name": "stock 9",
      "mmname": "Myanmar stock 9",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock9@example.com",
    },
    {
      "id": 10,
      "code": "C-00010",
      "name": "stock 10",
      "mmname": "Myanmar stock 10",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock10@example.com",
    },
  ],
  stock: {},
}
const mutations= {
  setStockList(state, stocks) {
    state.stocks = stocks
  },
  setStock(state, stock) {
    state.stock = stock
  }
}
const getters= {
  stockList: (state) => state.stocks,
}
const actions= {
  async getStockList() {
    return state.stocks
      // await Axios.get('/api/stock')
      // .then( response => {
      //    commit('setStockList', response.data)
      // })
      // .catch(error => console.log(error.response));
  },
  async savestock({dispatch}, payload) {
      Axios.post('/api/stock', {
          code: payload.code,
          name: payload.name,
          mmname: payload.mmname,
          phone: payload.phone,
          address: payload.address,
          email: payload.email
      })
      .then({
        // 
      })
      .catch(error => console.log(error.response));
      dispatch('getStockList')
  },
  async editStock({commit}) {
    commit('setStock', {
      "id": 8,
      "code": "C-0008",
      "name": "stock 8",
      "mmname": "Myanmar stock 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "stock8@example.com",
    })
      // var url = '/api/stock?id=' + payload.id
      // Axios.patch(url)
      // .then( response => {
      //   commit('setStock', response.data)
      // })
      // .catch(error => console.log(error.response));
  },
  async Updatestock({dispatch}, payload) {
    var url = '/api/stock?id=' + payload.id
    Axios.put(url, {
      code: payload.code,
      name: payload.name,
      mmname: payload.mmname,
      phone: payload.phone,
      address: payload.address,
      email: payload.email
    })
    .then({
      // 
    })
    .catch(error => console.log(error.response));
    dispatch('getStockList');
},
  async Deletestock({dispatch}, payload) {
    var url = '/api/stock?id=' + payload.id
    Axios.delete(url)
    .then({
      // 
    })
    .catch(error => console.log(error.response));
    dispatch('getStockList')
  },
}

export default{
  state,
  getters,
  actions,
  mutations,
}