
<template>
  <div class="center">
    <vs-button @click="active=!active">
      New Customer
    </vs-button>
    <vs-dialog prevent-close width="550px" v-model="active">
      <template #header>
        <h4 class="not-margin">
          <b>New Customer</b>
        </h4>
      </template>
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
              @click="saveCustomer"
            >
              Save
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
    </vs-dialog>
  </div>
</template>
<script>
export default {
  name:'create',
  data:() => ({
    active: false,
    customer: {}
  }),
  methods: {
    saveCustomer() {
      return this.$store.dispatch('saveCustomer')
    },
    close() {
      this.customer = {}
      this.active = false
    }
  }
}
</script>
<style scoped>
  .customer-fm {
      padding: 10px 20px;
  }
</style>

      