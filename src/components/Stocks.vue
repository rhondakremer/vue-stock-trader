<template>
  <div class="container">
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
