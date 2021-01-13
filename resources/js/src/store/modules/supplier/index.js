import Vue from "vue";
import Axios from "axios";

Vue.use(Axios);

const state = {
  // suppliers: [],
  suppliers: [  
    {
      "id": 1,
      "code": "C-0001",
      "name": "supplier 1",
      "mmname": "Myanmar supplier 1",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier1@example.com",
    },
    {
      "id": 2,
      "code": "C-0002",
      "name": "supplier 2",
      "mmname": "Myanmar supplier 2",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier2@example.com",
    },
    {
      "id": 3,
      "code": "C-0003",
      "name": "supplier 3",
      "mmname": "Myanmar supplier 3",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier3@example.com",
    },
    {
      "id": 4,
      "code": "C-0004",
      "name": "supplier 4",
      "mmname": "Myanmar supplier 4",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier4@example.com",
    },
    {
      "id": 5,
      "code": "C-0005",
      "name": "supplier 5",
      "mmname": "Myanmar supplier 5",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier5@example.com",
    },
    {
      "id": 6,
      "code": "C-0006",
      "name": "supplier 6",
      "mmname": "Myanmar supplier 6",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier6@example.com",
    },
    {
      "id": 7,
      "code": "C-0007",
      "name": "supplier 7",
      "mmname": "Myanmar supplier 7",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier7@example.com",
    },
    {
      "id": 8,
      "code": "C-0008",
      "name": "supplier 8",
      "mmname": "Myanmar supplier 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier8@example.com",
    },
    {
      "id": 9,
      "code": "C-0009",
      "name": "supplier 9",
      "mmname": "Myanmar supplier 9",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier9@example.com",
    },
    {
      "id": 10,
      "code": "C-00010",
      "name": "supplier 10",
      "mmname": "Myanmar supplier 10",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier10@example.com",
    },
  ],
  supplier: {},
}
const mutations= {
  setSupplierList(state, suppliers) {
    state.suppliers = suppliers
  },
  setSupplier(state, supplier) {
    state.supplier = supplier
  }
}
const getters= {
  supplierList: (state) => state.suppliers,
}
const actions= {
  async getSupplierList() {
    return state.suppliers
      // await Axios.get('/api/supplier')
      // .then( response => {
      //    commit('setSupplierList', response.data)
      // })
      // .catch(error => console.log(error.response));
  },
  async saveSupplier(payload) {
      Axios.post('/api/supplier', {
          code: payload.code,
          name: payload.name,
          mmname: payload.mmname,
          phone: payload.phone,
          address: payload.address,
          email: payload.email
      })
      .then({
        // dispatch('getSupplierList')
      })
      .catch(error => console.log(error.response));
  },
  async editSupplier({commit}) {
    commit('setSupplier', {
      "id": 8,
      "code": "C-0008",
      "name": "supplier 8",
      "mmname": "Myanmar supplier 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "supplier8@example.com",
    })
      // var url = '/api/supplier?id=' + payload.id
      // Axios.patch(url)
      // .then( response => {
      //   commit('setSupplier', response.data)
      // })
      // .catch(error => console.log(error.response));
  },
  async Updatesupplier({dispatch}, payload) {
    var url = '/api/supplier?id=' + payload.id
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
    dispatch('getSupplierList');
},
  async Deletesupplier({dispatch}, payload) {
    var url = '/api/supplier?id=' + payload.id
    Axios.delete(url)
    .then({
      // 
    })
    .catch(error => console.log(error.response));
    dispatch('getSupplierList')
  },
}

export default{
  state,
  getters,
  actions,
  mutations,
}