import Vue from "vue";
import Axios from "axios";

Vue.use(Axios);

const state = {
  // customers: [],
  customers: [  
    {
      "id": 1,
      "code": "C-0001",
      "name": "Customer 1",
      "mmname": "Myanmar Customer 1",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer1@example.com",
    },
    {
      "id": 2,
      "code": "C-0002",
      "name": "Customer 2",
      "mmname": "Myanmar Customer 2",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer2@example.com",
    },
    {
      "id": 3,
      "code": "C-0003",
      "name": "Customer 3",
      "mmname": "Myanmar Customer 3",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer3@example.com",
    },
    {
      "id": 4,
      "code": "C-0004",
      "name": "Customer 4",
      "mmname": "Myanmar Customer 4",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer4@example.com",
    },
    {
      "id": 5,
      "code": "C-0005",
      "name": "Customer 5",
      "mmname": "Myanmar Customer 5",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer5@example.com",
    },
    {
      "id": 6,
      "code": "C-0006",
      "name": "Customer 6",
      "mmname": "Myanmar Customer 6",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer6@example.com",
    },
    {
      "id": 7,
      "code": "C-0007",
      "name": "Customer 7",
      "mmname": "Myanmar Customer 7",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer7@example.com",
    },
    {
      "id": 8,
      "code": "C-0008",
      "name": "Customer 8",
      "mmname": "Myanmar Customer 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer8@example.com",
    },
    {
      "id": 9,
      "code": "C-0009",
      "name": "Customer 9",
      "mmname": "Myanmar Customer 9",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer9@example.com",
    },
    {
      "id": 10,
      "code": "C-00010",
      "name": "Customer 10",
      "mmname": "Myanmar Customer 10",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer10@example.com",
    },
  ],
  customer: {},
}
const mutations= {
  setCustomerList(state, customers) {
    state.customers = customers
  },
  setCustomer(state, customer) {
    state.customer = customer
  }
}
const getters= {
  customerList: (state) => state.customers,
  customer: (state) => state.customer
}
const actions= {
  async getCustomerList() {
      return state.customers
      // await Axios.get('/api/customer')
      // .then( response => {
      //    commit('setCustomerList', response.data)
      // })
      // .catch(error => console.log(error.response));
  },
  async saveCustomer({dispatch}, payload) {
      Axios.post('/api/customer', {
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
      dispatch('getCustomerList')
  },
  async getCustomer({commit}) {
    commit('setCustomer', {
      "id": 8,
      "code": "C-0008",
      "name": "Customer 8",
      "mmname": "Myanmar Customer 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "customer8@example.com",
    })
      // var url = '/api/customer?id=' + payload.id
      // Axios.patch(url)
      // .then( response => {
      //   commit('setCustomer', response.data)
      // })
      // .catch(error => console.log(error.response));
  },
  async UpdateCustomer({dispatch}, payload) {
    var url = '/api/customer?id=' + payload.id
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
    dispatch('getCustomerList')
},
  async DeleteCustomer({dispatch}, payload) {
    var url = '/api/customer?id=' + payload.id
    Axios.delete(url)
    .then({
      // 
    })
    .catch(error => console.log(error.response));
    dispatch('getCustomerList')
  },
}

export default{
  state,
  getters,
  actions,
  mutations,
}