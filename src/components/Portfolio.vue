<template>
  <div class="container">
      <div v-if="getPortfolio">
        <PortfolioStock v-for="(stock, index) in getPortfolio" :stock="stock" :index="index" :key="index" />
      </div>
      <div v-else>
          <p>Your portfolio is empty :( Visit the stocks tab to make a purchase.</p>
      </div>
  </div>
</template>

<script>
import PortfolioStock from './PortfolioStock.vue'
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
      return {
          sellAmount: ''
      }
  },
  components: {
      PortfolioStock
  },
  computed: {
    ...mapGetters(["getStockInfo", "getPortfolio"])
  },
    methods: {
      ...mapMutations([
        'buyStocks'
    ]),
      sellStocks(payload) {
          console.log(payload)
          this.sellAmount = '';
          this.$store.commit('sellStocks', payload);
      }
  }
};
</script>
