<template>
  <div class="container">
    <div class="card" style="width: 40rem; border:1px solid black; display:inline-block; margin-left:1%" v-for="(stock, index) in getStockInfo" :key="index">
      <div class="card-body" style="margin:2%">
        <h5 class="card-title">{{ stock.name}} (Price: {{ stock.price }})</h5>
        <p class="card-text">
          <input type="text" placeholder="Quantity" v-model.lazy="purchaseAmount">
          <button @click="buyStocks({index:index, amount:Number(purchaseAmount), price:stock.price})">Buy</button>
        </p>
      </div>
    </div>
    <br>
    {{ getStockInfo }}
          purchase amount is: {{ purchaseAmount }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
        purchaseAmount: ''
    }
  },
  computed: {
    ...mapGetters([
        "getStockInfo"]),
    
  },
  methods: {
      ...mapMutations([
        'buyStocks'
    ]),
      buyStocks(payload) {
          if (this.$store.state.funds > 0 && (payload.amount * payload.price) <= this.$store.state.funds) {
              this.purchaseAmount = '';
              this.$store.commit('buyStocks', payload);
          }
          else {
              this.purchaseAmount = '';
              alert("Insufficient funds!")
          }
          
      }
  }
};
</script>
