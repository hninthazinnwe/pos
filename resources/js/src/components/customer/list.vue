
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
        <customer></customer>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="8"
        class="left-div"
      >
        <h3>Customer List</h3>
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
              <vs-th>
                MMName
              </vs-th>
              <vs-th>
                Phone
              </vs-th>
              <vs-th class="action">
                Action
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(row, i) in $vs.getPage(customers, page, max)"
              :data="row"
              :is-selected="selected == row"
            >
              <vs-td class="no">
                {{ row.id }}
              </vs-td>
              <vs-td class="code">
                {{ row.code }}
              </vs-td>
              <vs-td class="name">
                {{ row.name }}
              </vs-td>
              <vs-td>
                {{ row.mmname }}
              </vs-td>
              <vs-td>
                {{ row.phone }}
              </vs-td>
              <vs-td class="action">
                <vs-row>
                  <vs-button
                    border
                    size="small"
                    @click="getCustomer(row)"
                  >
                    Edit
                  </vs-button>
                  <vs-button
                    border
                    danger
                    size="small"
                    @click="deleteCustomer(row)"
                  >
                    Delete
                  </vs-button>
                </vs-row>
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(customers, max)" />
          </template>
        </vs-table>
      </vs-col>
      <vs-col w="4"
        class="right-div"
      >
        <span class="data">
          <h3>Customer Detail</h3>
          <pre>
            <span class="label-text">Code :</span> {{ selected ? selected.code : '' }}
            <span class="label-text">Name :</span> {{ selected ? selected.name : '' }}
            <span class="label-text">Myanmar Name :</span> {{ selected ? selected.mmname : '' }}
            <span class="label-text">Phone :</span> {{ selected ? selected.phone : '' }}
            <span class="label-text">Address :</span> {{ selected ? selected.address : '' }}
            <span class="label-text">Email :</span> {{ selected ? selected.email : '' }}
          </pre>
        </span>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import customer from './create'

export default {
  components: {
    'customer' : customer,
  },
  data:() => ({
    page: 1,
    max: 8,
    selected: null,
    customers: [],
    searchTxt: ''
  }),
  methods: {
    getCustomerList() {
      this.customers = this.$store.dispatch('getCustomerList')
    },
    getCustomer() {
      this.$router.push('/customeredit')
      this.$store.dispatch('getCustomer')
    },
    deleteCustomer(item) {
      // this.$store.dispatch('deleteCustomer')
      let i = this.customers.map(item => item.id).indexOf(item.id);
      this.customers.splice(i, 1)
    },
    search() {
      // var temp = []
      var temp = this.customers.map(item => {
        if(
            item.name == this.searchTxt || 
            item.code == this.searchTxt || 
            item.email == this.searchTxt
          ){
          return item
        }
      })
      this.customers = []
      this.customers.push(temp)
    }
  },
  created() {
    // this.getCustomerList()
    this.customers = this.$store.state.customer.customers
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

        