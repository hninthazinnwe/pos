<template>
  <div
    class="div-search"
  >
    <vs-row>
      <vs-col w="3">
        <vs-input
          type="date"
          label="From Date"
        />
      </vs-col>
      <vs-col w="3">
        <vs-input
          type="date"
          label="To Date"
        />
      </vs-col>
      <vs-col w="3">
        <vs-input
          label="Voucher"
        />
      </vs-col>
      <vs-col w="2">
        <vs-input
          label="Customer"
        />
      </vs-col>
      <vs-col w="2">
        <vs-button
          size="medium"
          @click="$emit('search')"
        >
          Search
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<style scoped>
.div-search {
  margin: 20px 5px 10px 5px;
} 
</style>