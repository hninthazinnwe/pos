
<template>
  <div class="center">
    <vs-button @click="active=!active">
      New User
    </vs-button>
    <vs-dialog prevent-close width="550px" v-model="active">
      <template #header>
        <h4 class="not-margin">
          <b>New User</b>
        </h4>
      </template>
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
              @click="saveUser"
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
    user: {}
  }),
  methods: {
    saveUser() {
      return this.$store.dispatch('saveUser')
    },
    close() {
      this.user = {}
      this.active = false
    }
  }
}
</script>
<style scoped>
  .user-fm {
      padding: 10px 20px;
  }
</style>

      