import Vue from "vue";
import Axios from "axios";

Vue.use(Axios);

const state = {
  // users: [],
  user: {},
  users: [  
    {
      "id": 1,
      "code": "C-0001",
      "name": "user 1",
      "mmname": "Myanmar user 1",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user1@example.com",
    },
    {
      "id": 2,
      "code": "C-0002",
      "name": "user 2",
      "mmname": "Myanmar user 2",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user2@example.com",
    },
    {
      "id": 3,
      "code": "C-0003",
      "name": "user 3",
      "mmname": "Myanmar user 3",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user3@example.com",
    },
    {
      "id": 4,
      "code": "C-0004",
      "name": "user 4",
      "mmname": "Myanmar user 4",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user4@example.com",
    },
    {
      "id": 5,
      "code": "C-0005",
      "name": "user 5",
      "mmname": "Myanmar user 5",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user5@example.com",
    },
    {
      "id": 6,
      "code": "C-0006",
      "name": "user 6",
      "mmname": "Myanmar user 6",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user6@example.com",
    },
    {
      "id": 7,
      "code": "C-0007",
      "name": "user 7",
      "mmname": "Myanmar user 7",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user7@example.com",
    },
    {
      "id": 8,
      "code": "C-0008",
      "name": "user 8",
      "mmname": "Myanmar user 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user8@example.com",
    },
    {
      "id": 9,
      "code": "C-0009",
      "name": "user 9",
      "mmname": "Myanmar user 9",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user9@example.com",
    },
    {
      "id": 10,
      "code": "C-00010",
      "name": "user 10",
      "mmname": "Myanmar user 10",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user10@example.com",
    },
  ]
}
const mutations= {
  setUserList(state, users) {
    state.users = users
  },
  setUser(state, user) {
    state.user = user
  }
}
const getters= {
  userList: (state) => state.users,
}
const actions= {
  async getUserList() {
      // await Axios.get('/api/user')
      // .then( response => {
      //    commit('setUserList', response.data)
      // })
      // .catch(error => console.log(error.response));
      return state.users
  },
  async saveUser({dispatch}, payload) {
      Axios.post('/api/user', {
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
      dispatch('getUserList')
  },
  async getUser({commit}) {
    commit('setUser', {
      "id": 8,
      "code": "C-0008",
      "name": "user 8",
      "mmname": "Myanmar user 8",
      "phone": '09-123457654',
      "address": "-------------------------",
      "email": "user8@example.com",
    })
      // var url = '/api/user?id=' + payload.id
      // Axios.patch(url)
      // .then( response => {
      //   commit('setUser', response.data)
      // })
      // .catch(error => console.log(error.response));
  },
  async updateUser({dispatch}, payload) {
    var url = '/api/user?id=' + payload.id
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
    dispatch('getUserList');
},
  async deleteUser({dispatch}, payload) {
    var url = '/api/user?id=' + payload.id
    Axios.delete(url)
    .then({
      // 
    })
    .catch(error => console.log(error.response));
    dispatch('getUserList')
  },
}

export default{
  state,
  getters,
  actions,
  mutations,
}