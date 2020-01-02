<template>
  <div class="container">
  <div v-if="getPortfolio">
    <div class="card" style="width: 40rem; border:1px solid black; margin-left:1%" v-for="(stock, index) in getPortfolio" :key="index">
      <div class="card-body" style="margin:2%">
        <h5 class="card-title">{{ stock.name }} (Price: {{ stock.price }} | Quantity: {{ stock.holding }})</h5>
        <p class="card-text">
          <input type="text" placeholder="Quantity" v-model.lazy="sellAmount" />
          <button @click="sellStocks({index:index, amount:sellAmount, price:stock.price})">Sell</button>
        </p>
      </div>
    </div>
  </div>

  <div v-else>
      <p>Your portfolio is empty :( Visit the stocks tab to make a purchase.</p>
  </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
      return {
          sellAmount: ''
      }
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
