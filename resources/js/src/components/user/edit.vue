<template>
  <div class="content">
    <div class="user-fm">
      <vs-row>
        <vs-col w="12">
          <h4 class="not-margin">
            <b>User Edit</b>
          </h4>
          <div class="user-fm">
            <vs-row>
              <vs-col w="3">
                <label>Code</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="user.code" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Name</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="user.name" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Myanmar Name</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="user.mmname" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Phone</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="user.phone" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Address</label>
              </vs-col>
              <vs-col w="3">
                <textarea type="text" v-model="user.address" class="my-textarea"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col w="3">
                <label>Email</label>
              </vs-col>
              <vs-col w="3">
                <input type="text" v-model="user.email" class="my-input"/>
              </vs-col>
            </vs-row>
            <vs-row>
              <vs-col offset="3" w="3">
                <vs-button
                  size="medium"
                  @click="updateUser"
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
    user: {}
  }),
  created() {
    this.user = this.$store.state.user.user
  },
  methods: {
    updateUser() {
      return this.$store.dispatch('updateUser')
    },
    close() {
      this.user = {}
      this.$router.push('/user')
    }
  }
}
</script>
<style scoped>
  .user-fm {
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