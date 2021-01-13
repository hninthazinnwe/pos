<template>
  <div>
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
              <!-- <vs-th>
                Amount
              </vs-th> -->
              <vs-th>
                Total
              </vs-th>
              <vs-th>
                Action
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(row, i) in saleDetail"
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
                <vs-input
                  v-model="row.price"
                  name="price"
                  @keydown.enter="calAmount(i)"
                />
              </vs-td>
              <vs-td>
                <vs-input
                  v-model="row.qty"
                  name="qty"
                  @keydown.enter="calAmount(i)"
                />
              </vs-td>
              <vs-td>
                {{ row.amount }}
              </vs-td>
              <vs-td>
                <vs-row>
                  <vs-button
                    danger
                    size="small"
                    @click="deleteRow(i)"
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
export default {
  data:() => ({
    stocks: []
  }),
  props: ['item', 'saleDetail', 'saleHeader'],
  watch: {
    item() {
      this.addRow();
    }
  },
  methods: {
    calAmount(index) {
      // console.log('+++++++++++++', index, '---', this.saleDetail)
      var qty = this.saleDetail[index].qty;
      var price = this.saleDetail[index].price;
      var amount = qty * price
      this.saleDetail[index].amount = amount;
      this.calHeaderAmount()
      // console.log('+++++++++++++', index, '---', this.saleDetail)
      // this.saleHeader.totalQty += qty
      // this.saleHeader.totalAmount += amount
    },
    calHeaderAmount() {
      this.saleHeader.totalQty = 0
      this.saleHeader.totalAmount = 0
      this.saleDetail.forEach(item => {
        this.saleHeader.totalQty += parseInt(item.qty)
        this.saleHeader.totalAmount += parseFloat(item.amount)
      })
    },
    addRow(){
      var row = {
          no:0,
          code:this.item.code,
          name:this.item.name,
          price: this.item.price,
          qty: 0,
          discount: 0,
          amount: 0
      };
      this.saleDetail.push(row)
    },
    deleteRow(index) {
      let i = this.saleDetail.map(item => item.id).indexOf(index);
      this.saleDetail.splice(i, 1)
      this.calHeaderAmount()
    }
  }
}
</script>
