<template>
  <div>
    <div class="customer-fm">
      <vs-row>
        <vs-col w="12">
          <h4 class="not-margin">
            <b>Customer Edit</b>
          </h4>
          <div class="customer-fm">
            <vs-row>
              <vs-col w="3">
                <label>Code</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="customer.code" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Name</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="customer.name" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Myanmar Name</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="customer.mmname" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Phone</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="customer.phone" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Address</label>
              </vs-col>
              <vs-col w="3">
                <textarea type="text" v-model="customer.address" class="my-textarea"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Email</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="customer.email" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col offset="3" w="3">
                <vs-button
                  size="medium"
                  @click="updateCustomer"
                >
                  Update
                </vs-button>
              </vs-col>
              <vs-col w="3">
                <vs-button
                  size="medium"
                  @click="close"
                >
                  Close
                </vs-button>
              </vs-col>
            </vs-row>
          </div>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  data:() => ({
    customer: {}
  }),
  created() {
    this.$store.dispatch('editCustomer')
    this.customer = this.$store.state.customer.customer
  },
  methods: {
    updateCustomer() {
      return this.$store.dispatch('updateCustomer')
    },
    close() {
      this.customer = {}
      this.$router.push('/customer')
    }
  }
}
</script>
<style scoped>
  .customer-fm {
    /* width: 700px; */
    margin : 20px 200px;
    padding: 20px 10px;
    box-shadow: #ddd;
    background: #eee;
  }
  .content {
    margin: 0px;
    border: 3px solid #000;
    height: 650px;
    padding: 5px;
  }
</style>