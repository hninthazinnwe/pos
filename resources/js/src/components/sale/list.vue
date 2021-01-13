
<template>
  <div class="content">
    <vs-dialog 
      v-model="showDetail"
    >
    <template #header>
    <h4>Sale Detail</h4>
    </template>
      <dd>
        <dl>
          <span><b>Voucher :</b></span>
          <span>Vr-0002</span>
        </dl>
        <dl>
          <span><b>Sale Date :</b></span>
          <span>19/05/2020</span>
        </dl>
        <dl>
          <span><b>Customer :</b></span>
          <span>Hnin Thazin Nwe</span>
        </dl>
        <dl>
          <span><b>Total Amount :</b></span>
          <span>120,000</span>
        </dl>
        <dl>
          <span><b>Total Qty :</b></span>
          <span>23</span>
        </dl>
      </dd>
      <vs-row>
        <vs-col>
          <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                No
              </vs-th>
              <vs-th>
                Code
              </vs-th>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Price
              </vs-th>
              <vs-th>
                Qty
              </vs-th>
              <vs-th>
                Total
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(row, i) in saleList.header"
              :data="row"
            >
              <vs-td>
                {{ i+1 }}
              </vs-td>
              <vs-td>
                {{ row.code }}
              </vs-td>
              <vs-td>
                {{ row.name }}
              </vs-td>
              <vs-td>
                {{ row.price }}
              </vs-td>
              <vs-td>
                {{ row.qty }}
              </vs-td>
              <vs-td>
                {{ row.total }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
        </vs-col>
      </vs-row>
    </vs-dialog>
    <vs-row>
      <search />
    </vs-row>
    <vs-row>
      <vs-button
        size="medium"
        @click="newSale"
      >
        New Sale
      </vs-button>
    </vs-row>
    <vs-row>
      <vs-col w="12">
        <vs-table>
          <template #thead>
            <vs-tr>
              <vs-th>
                No
              </vs-th>
              <vs-th>
                Date
              </vs-th>
              <vs-th>
                VoucherNo
              </vs-th>
              <vs-th>
                Customer
              </vs-th>
              <vs-th>
                PaymentType
              </vs-th>
              <vs-th>
                Total Amount
              </vs-th>
              <vs-th>
                Action
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(row, i) in saleList"
              :data="row"
            >
              <vs-td>
                
              </vs-td>
              <vs-td>
                date-example
              </vs-td>
              <vs-td>
                {{ row.voucherNo }}
              </vs-td>
              <vs-td>
                {{ row.customer }}
              </vs-td>
              <vs-td>
                {{ row.payment }}
              </vs-td>
              <vs-td>
                {{ row.totalAmount }}
              </vs-td>
              <vs-td>
                <vs-row>
                  <vs-button
                    border
                    size="small"
                    @click="editSale(row)"
                  >
                    Edit
                  </vs-button>
                  <vs-button
                    border
                    size="small"
                    @click="viewSale(row)"
                  >
                    View
                  </vs-button>
                  <vs-button
                    border
                    danger
                    size="small"
                    @click="deleteSale(row)"
                  >
                    Delete
                  </vs-button>
                </vs-row>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
// import format from "date-fns/format";
import search from './search.vue'
export default {
  components: {
    "search": search
  },
  data:() => ({
    saleList: [],
    showDetail: false
  }),
  methods: {
    getSaleList() {
      this.saleList = this.$store.dispatch('getsaleList')
    },
    editSale() {
      this.$store.dispatch('getVoucher')
      this.$router.push('/sale')
    },
    viewSale() {
      this.showDetail = true
    },
    deleteSale(item) {
      // this.$store.dispatch('deleteSale')
      let i = this.saleList.map(item => item.id).indexOf(item.id);
      this.saleList.splice(i, 1)
    },
    newSale() {
      this.$router.push('/sale')
    }
    // dateFormat(
    //   date
    // ) {
    //   const defaultFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ' // date-fnsのdefaultに準拠
    //   return format(date, typeof _format === 'string' ? _format : defaultFormat, {
    //     locale: locales[i18nUtil.locale],
    //     ...options,
    //   })
    // }
  },
  created() {
    // this.getSupplierList()
    this.saleList =  this.$store.state.saleList.saleList
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
.sale-detail {
  display: block;
  width: 500px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  z-index: 100;
  background: #ddd;
}
</style>

        