
<template>
  <div class="content">
    <vs-row>
      <vs-col w="2">
        <vs-input
          border
          icon-after
          placeholder="Enter Search Text"
          v-model="searchTxt"
          @keydown.enter="search"
        >
          <template #icon>
            <i class='bx bx-search'></i>
          </template>
        </vs-input>
      </vs-col>
      <vs-col w="2">
        <user></user>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="8"
        class="left-div"
      >
      <h3>User List</h3>
        <vs-table v-model="selected">
          <template #thead>
            <vs-tr>
              <vs-th class="no">
                No
              </vs-th>
              <vs-th class="code">
                Code
              </vs-th>
              <vs-th class="name">
                Name
              </vs-th>
              <vs-th class="email">
                Email
              </vs-th>
              <vs-th class="action">
                Action
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(row, i) in $vs.getPage(users, page, max)"
              :data="row"
              :is-selected="selected == row"
            >
              <vs-td class="no">
                {{ i+1 }}
              </vs-td>
              <vs-td class="code">
                {{ row.code }}
              </vs-td>
              <vs-td class="name">
                {{ row.name }}
              </vs-td>
              <vs-td class="email">
                {{ row.email }}
              </vs-td>
              <vs-td class="action">
                <vs-row>
                  <vs-button
                    border
                    size="small"
                    @click="getUser(row)"
                  >
                    Edit
                  </vs-button>
                  <vs-button
                    border
                    danger
                    size="small"
                    @click="deleteUser(row)"
                  >
                    Delete
                  </vs-button>
                </vs-row>
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(users, max)" />
          </template>
        </vs-table>
      </vs-col>
      <vs-col w="4"
        class="right-div"
      >
      <h3>User Detail</h3>
        <span class="data">
          <pre>
            <span class="label-text">Code :</span> {{ selected ? selected.code : '' }}
            <span class="label-text">Name :</span> {{ selected ? selected.name : '' }}
            <span class="label-text">Myanmar Name :</span> {{ selected ? selected.mmname : '' }}
            <span class="label-text">Email :</span> {{ selected ? selected.email : '' }}
            <span class="label-text">Website :</span> {{ selected ? selected.website : '' }}
          </pre>
        </span>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import user from './create.vue'

export default {
  components: {
    'user' : user,
  },
  data:() => ({
    page: 1,
    max: 8,
    selected: null,
    users: [],
    searchTxt: ''
  }),
  methods: {
    getUserList() {
      this.users = this.$store.dispatch('getUserList')
    },
    getUser() {
      this.$router.push('/useredit')
      this.$store.dispatch('getUser')
    },
    deleteUser(item) {
      // this.$store.dispatch('deleteUser')
      let i = this.users.map(item => item.id).indexOf(item.id);
      this.users.splice(i, 1)
    },
    search() {
      // var temp = []
      var temp = this.users.map(item => {
        if(
            item.name == this.searchTxt || 
            item.code == this.searchTxt || 
            item.email == this.searchTxt
          ){
          return item
        }
      })
      this.users = []
      console.log('*********1********', this.users, temp)
      this.users.push(temp)
    }
  },
  created() {
    // this.getUserList()
    this.users =  this.$store.state.user.users
  }
}
</script>
<style scoped>
.content {
  margin: 0px;
  border: 3px solid #000;
  height: 650px;
  padding: 5px;
} 
</style>

        