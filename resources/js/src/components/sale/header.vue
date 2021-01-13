<template>
  <div>
    <vs-row>
      <vs-col>
        <label>Total Qty</label>
        <vs-input
          v-if="saleHeader"
          v-model="saleHeader.totalQty"
          name="totalQty"
        />
      </vs-col>
      <vs-col>
        <label>Total Amount</label>
        <vs-input
          v-if="saleHeader"
          v-model="saleHeader.totalAmount"
          name="totalAmount"
        />
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col>
        <vs-button
          size="medium"
          @click="$emit('save')"
        >
          Save
        </vs-button>
      </vs-col>
      <vs-col>
        <vs-button
          size="medium"
          @click="$emit('print')"
        >
          Print
        </vs-button>
      </vs-col>
      <vs-col>
        <vs-button
          size="medium"
          @click="$emit('cancel')"
        >
          New
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
// import { Component, Vue, Class, Emit } from 'vue-property-decorator'
// import { State, namespace } from 'vuex-class'
export default {
  props: ['saleHeader'],
  methods: {
    save() {
      //
    },
    print() {
      //
    },
    cancel() {
      //
    }
  },
}
</script>