<template>
  <div class="content">
    <div class="supplier-fm">
      <vs-row>
        <vs-col w="12">
          <h4 class="not-margin">
            <b>Supplier Edit</b>
          </h4>
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
                  @click="updateSupplier"
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
    supplier: {}
  }),
  created() {
    this.$store.dispatch('editSupplier')
    this.supplier = this.$store.state.supplier.supplier
  },
  methods: {
    updateSupplier() {
      return this.$store.dispatch('updateSupplier')
    },
    close() {
      this.supplier = {}
      this.$router.push('/supplier')
    }
  }
}
</script>
<style scoped>
  .supplier-fm {
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