
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
            <supplier></supplier>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col w="8"
        class="left-div"
      >
        <h3>Stock List</h3>
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
              <vs-th class="name">
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
              v-for="(row, i) in $vs.getPage(suppliers, page, max)"
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
              <vs-td class="name">
                {{ row.mmname }}
              </vs-td>
              <vs-td class="phone">
                {{ row.phone }}
              </vs-td>
              <vs-td class="action">
                <vs-row>
                  <vs-button
                    border
                    size="small"
                    @click="getSupplier(row)"
                  >
                    Edit
                  </vs-button>
                  <vs-button
                    border
                    danger
                    size="small"
                    @click="deleteSupplier(row)"
                  >
                    Delete
                  </vs-button>
                </vs-row>
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(suppliers, max)" />
          </template>
        </vs-table>
      </vs-col>
      <vs-col w="4"
        class="right-div"
      >
        <span class="data">
           <h3>Supplier Detail</h3>
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
import supplier from './create.vue'
// import {mapGetters} from 'vuex'

export default {
  components: {
    'supplier' : supplier,
  },
  data:() => ({
    page: 1,
    max: 8,
    selected: null,
    suppliers: [],
    searchTxt: ''
  }),
  methods: {
    getSupplierList() {
      this.suppliers = this.$store.dispatch('getSupplierList')
    },
    getSupplier() {
      this.$router.push('/supplieredit')
      this.$store.dispatch('getSupplier')
    },
    deleteSupplier(item) {
      // this.$store.dispatch('deleteSupplier')
      let i = this.suppliers.map(item => item.id).indexOf(item.id);
      this.suppliers.splice(i, 1)
    },
    search() {
      // var temp = []
      var temp = this.suppliers.map(item => {
        if(
            item.name == this.searchTxt || 
            item.code == this.searchTxt || 
            item.email == this.searchTxt
          ){
          return item
        }
      })
      this.suppliers = []
      this.suppliers.push(temp)
    }
  },
  created() {
    // this.getSupplierList()
    this.suppliers =  this.$store.state.supplier.suppliers
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

        