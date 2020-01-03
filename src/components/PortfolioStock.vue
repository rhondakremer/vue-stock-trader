<template>
  <div class="container">
    <div class="card" style="width: 40rem; border:1px solid black; margin-left:1%">
      <div class="card-body" style="margin:2%">
        <h5 class="card-title">{{ stock.name }} (Price: {{ stock.price }} | Quantity: {{ stock.holding }})</h5>
        <p class="card-text">
          <input type="number" placeholder="Quantity" v-model.lazy="sellAmount" />
          <button @click="sellStocks({index:index, amount:sellAmount, price:stock.price})">Sell</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
      return {
          sellAmount: ''
      }
  },
  props: ['stock', 'index'],
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
