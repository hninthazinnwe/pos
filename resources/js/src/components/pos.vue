<template>
  <div>
    <div class="content">
      <vs-row>
        <vs-card type="3" class="card" @click="getRoute('sale')">
          <template #title>
            <h3>Sale Function</h3>
          </template>
          <template #img>
            <img src="../assets/sale.png" alt="" class="menu-image">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
        </vs-card>
        <vs-card type="3" class="card">
            <template #title>
              <h3>Purchase Function</h3>
            </template>
            <template #img>
              <img src="../assets/purchase.png" alt="" class="menu-image">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
        </vs-card>
        <vs-card type="3" class="card">
          <template #title>
            <h3>Stock Transfer Function</h3>
          </template>
          <template #img>
            <img src="../assets/stock-transfer.png" alt="" class="menu-image">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
        </vs-card>
        <vs-card type="3" class="card">
          <template #title>
            <h3>Stock Adjustment Function</h3>
          </template>
          <template #img>
            <img src="../assets/stock-adjustment.png" alt="" class="menu-image">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
        </vs-card>
        <vs-card type="3" class="card">
          <template #title>
            <h3>Pay For Credit Function</h3>
          </template>
          <template #img>
            <img src="../assets/payforcredit.png" alt="" class="menu-image">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
        </vs-card>
        <vs-card type="3" class="card">
          <template #title>
            <h3>Report Function</h3>
          </template>
          <template #img>
            <img src="../assets/report.png" alt="" class="menu-image">
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
        </vs-card>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pos',
  methods: {
    getRoute(page) {
      if(page === 'sale') {
        this.$router.push('/saleList')
      }
    }
  }
}
</script>
<style scoped>
.content {
  margin: 0px;
  border: 3px solid #000;
  height: 650px;
  padding: 5px 50px 5px 70px;
}
.card {
  margin: 40px 25px;
} 
.menu-image{
  min-width: 100px !important;
  /* height: 150px; */
} 
</style>