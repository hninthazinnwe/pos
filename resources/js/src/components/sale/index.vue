<template>
  <div class="content" v-if="saleHeader">
    <vs-row>
      <vs-col w="10">
        <vs-row class="header">
          <vs-col w="2" class="input-div">
            <vs-input
              type="date"
              label="Date"
              name="Date"
            />
          </vs-col>
          <vs-col w="2" class="input-div">
            <vs-input
              
              label="VoucherNo"
              v-model="saleHeader.voucherNo"
              name="voucher"
            />
          </vs-col>
          <vs-col w="2" class="input-div">
            <vs-select
                label="PaymentType"
                v-model="saleHeader.paymetnType"
                name="payment"
              >
                <vs-option label="Credit" value="1">
                  Credit
                </vs-option>
                <vs-option label="Cash" value="2">
                  Cash
                </vs-option>
              </vs-select>
          </vs-col>
          <vs-col w="3" class="input-div">
            <vs-input
              label="Customer"
              v-model="cusCode"
              name="customer"
              v-on:keydown.enter="getCustomer"
            />
            <vs-table 
              id="customers"
              class="table customerList"
              :class="{'cus-list': isCusListShow}"
            >
              <template #tbody>
              <vs-tr
                v-for="(tr, i) in customers"
                :key="i"
                :data="tr"
                v-on:click="setCustomer(tr)"
              >
                <vs-td>
                  {{ tr.name }}
                </vs-td>
                <vs-td>
                {{ tr.code }}
                </vs-td>
                <vs-td>
                {{ tr.id }}
                </vs-td>
              </vs-tr>
              </template>
            </vs-table>
          </vs-col>
          <vs-col w="2">
            <vs-input
              label="Stock"
              v-model="stockCode"
              name="stock"
              v-on:keydown.enter="getStock"
            />
            <vs-table 
              id="stocks"
              class="table stockList"
              :class="{'stk-list': isStockListShow}"
            >
              <template #tbody>
              <vs-tr
                v-for="(tr, i) in stocks"
                :key="i"
                :data="tr"
                v-on:click="setStock(tr)"
              >
                <vs-td>
                  {{ tr.name }}
                </vs-td>
                <vs-td>
                {{ tr.code }}
                </vs-td>
                <vs-td>
                {{ tr.id }}
                </vs-td>
              </vs-tr>
              </template>
            </vs-table>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col>
            <sale-detail 
              :item="item"
              :saleDetail="saleDetail"
              :saleHeader="saleHeader"
            />
          </vs-col>
        </vs-row>
      </vs-col>
      <vs-col w="2">
        <sale-header 
          :saleHeader="saleHeader"
          @save="save"
          @print="print"
          @cancel="cancel"
        />
      </vs-col>   
    </vs-row> 
  </div>
</template>
<script>
import detail from './detail.vue'
import header from './header.vue'
export default {
  components: {
    'sale-detail': detail,
    'sale-header': header
  },
  data:() => ({
    cusCode: '',
    stockCode: '',
    customers: {},
    stocks:{},
    item: {},
    isCusListShow: false,
    isStockListShow: false,
    saleHeader: {},
    saleDetail: []
  }),
  computed: {
    customerList(){
      return this.$store.state.sale.customers
    },
    stocksList(){
      return this.$store.state.sale.stocks
    },
  },
  async created() {
    // await this.$store.dispatch('prepareNewSale')
    this.saleHeader = this.$store.getters.header
    this.saleDetail = this.$store.getters.detail
    this.cusCode = this.saleHeader.customer
  },
  mounted() {
    //
  },
  methods: {
    getCustomer() {
      this.isCusListShow = true;
      // this.$store.dispatch('getCustomer')
      this.customers = this.customerList
    },
    setCustomer(customer) {
      this.saleHeader.customer = customer.code;
      this.isCusListShow = false;
    },
    getStock() {
      this.isStockListShow = true;
      // this.$store.dispatch('getStock')
      this.stocks = this.stocksList
    },
    setStock(stock) {
      this.item = stock;
      this.isStockListShow = false;
    },
    setPaymetType() {
      var e = document.getElementById('payment');
      this.saleHeader.paymetnType = document.getElementsByClassName('payment-list')[e.selectedIndex].value;
    },
    async save() {
      var data = {
        saleHeader: this.saleHeader,
        saleDetail: this.saleDetail
      }
      if(this.saleHeader.id === 0) {
        this.$store.dispatch('saveVoucher', { saleData: data})
      }else {
        this.$store.dispatch('updateVoucher', { saleData: data})
      }
    },
    async print() {
      //
    },
    async cancel() {
      //
    }
  }
}
</script>
<style scoped>
.content {
  margin: 80px 10px;
}
.header{
  margin: 20px 0px;
}
.input-div{
  margin: 0px 10px;
}
.customerList {
  display: none;
}
.stockList {
  display: none;
}
.cus-list {
  display: block;
}
.stk-list {
  display: block;
}
</style>