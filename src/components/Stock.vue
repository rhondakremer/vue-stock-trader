<template>
  <div class="container col-md-5 col-sm-6" style="margin-left: 5%; margin-top:3%">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name}} (Price: ${{ stock.price }})</h5>
        <p class="card-text">
          <input type="text" placeholder="Quantity" v-model="purchaseAmount">
          <button @click="buyStocks({index:index, amount:Number(purchaseAmount), price:stock.price})">Buy</button>
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
        purchaseAmount: ''
    }
  },
  props: ['stock', 'index'],
  methods: {
      ...mapMutations([
        'buyStocks'
    ]),
      buyStocks(payload) {
          // console.log(payload)
          if (this.$store.state.funds > 0 && (payload.amount * payload.price) <= this.$store.state.funds) {
              this.purchaseAmount = '';
              this.$store.commit('buyStocks', payload);
          }
          else {
              alert("Insufficient funds!")
          }
          
      }
  }
};
</script>

<style scoped>
.container {
  background-color: whitesmoke;
  padding: 1%;
}

.card {
  max-width: 100%; 
  margin-left:1%;
  border-radius: 0.3rem;
  border:1px #337ab7 solid; 
  padding: 5px;
}

.card-body {
  margin: 2%;
}

button:hover {
  background-color: #337ab7;
  color: white;
}
</style>