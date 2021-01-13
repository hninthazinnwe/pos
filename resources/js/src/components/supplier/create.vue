
<template>
  <div class="center">
    <vs-button @click="active=!active">
      New Supplier
    </vs-button>
    <vs-dialog prevent-close width="550px" v-model="active">
      <template #header>
        <h4 class="not-margin">
          <b>New Supplier</b>
        </h4>
      </template>
      <div class="supplier-fm">
        <vs-row>
          <vs-col w="3">
            <label>Code</label>
          </vs-col>
          <vs-col w="3">
            <input type="text" v-model="supplier.code" class="my-input"/>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="3">
            <label>Name</label>
          </vs-col>
          <vs-col w="3">
            <input type="text" v-model="supplier.name" class="my-input"/>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="3">
            <label>Myanmar Name</label>
          </vs-col>
          <vs-col w="3">
            <input type="text" v-model="supplier.mmname" class="my-input"/>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="3">
            <label>Phone</label>
          </vs-col>
          <vs-col w="3">
            <input type="text" v-model="supplier.phone" class="my-input"/>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="3">
            <label>Address</label>
          </vs-col>
          <vs-col w="3">
            <textarea type="text" v-model="supplier.address" class="my-textarea"/>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col w="3">
            <label>Email</label>
          </vs-col>
          <vs-col w="3">
            <input type="text" v-model="supplier.email" class="my-input"/>
          </vs-col>
        </vs-row>
        <vs-row>
          <vs-col offset="3" w="3">
            <vs-button
              size="medium"
              @click="saveSupplier"
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
  data:() => ({
    active: false,
    supplier: {}
  }),
  methods: {
    saveSupplier() {
      return this.$store.dispatch('saveSupplier')
    },
    close() {
      this.supplier = {}
      this.active = false
    }
  }
}
</script>
<style scoped>
  .supplier-fm {
      padding: 10px 20px;
  }
</style>

      