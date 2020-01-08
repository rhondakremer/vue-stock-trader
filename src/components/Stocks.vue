<template>
  <div class="container stock-holder">
    <Stock v-for="(stock, index) in getStockInfo" :stock="stock" :index="index" :key="index" />
  </div>
</template>

<script>
import Stock from './Stock.vue'

import { mapGetters } from "vuex";

export default {
  components: {
      Stock
  },
  computed: {
    ...mapGetters([
        "getStockInfo"]),
  }
}
</script>

<style scoped>
.stock-holder {
    border-radius: 0.3rem;
    background-color: whitesmoke;
    margin-top: 3%;
    min-height: 336px;
}
</style>
