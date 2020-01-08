<template>
  <div class="container portfolio-stock-holder">
      <div v-if="getPortfolio">
        <PortfolioStock v-for="(stock, index) in getPortfolio" :stock="stock" :index="index" :key="index" />
      </div>
      <div v-else>
          <p id="empty-portfolio-message">Your portfolio is empty :( Visit the stocks tab to make a purchase.</p>
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

<style scoped>
.portfolio-stock-holder {
  background-color: whitesmoke;
  border-radius: 0.3rem;
  margin-top: 3%;
  height: 336px;
}

#empty-portfolio-message {
  text-align: center;
  margin-top: 13%;
  font-size: 20px;
  
}
</style>
