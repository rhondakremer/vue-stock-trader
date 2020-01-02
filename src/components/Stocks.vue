<template>
  <div class="container">
    <div class="card" style="width: 40rem; border:1px solid black; display:inline-block" v-for="(stock, index) in getStockInfo" :key="index">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name}} (Price: {{ stock.price }})</h5>
        <p class="card-text">
          <input type="text" placeholder="Quantity">
          <button @click="buyStocks({index:index, amount:10, price:stock.price})">Buy</button>
          {{ getStockInfo }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters([
        "getStockInfo"]),
    
  },
  methods: {
      ...mapMutations([
        'buyStocks'
    ]),
      buyStocks(payload) {
          console.log(payload)
          this.$store.commit('buyStocks', payload);
      }
  }
};
</script>
