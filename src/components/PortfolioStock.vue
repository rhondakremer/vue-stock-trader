<template>

    <div class="container col-md-5 col-sm-6" style="margin-left: 5%; margin-top:3%">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name }} (Price: {{ stock.price }} | Quantity: {{ stock.holding }})</h5>
        <p class="card-text">
          <input type="number" placeholder="Quantity" v-model="sellAmount" />
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
          // console.log(payload);
          if (this.stock.holding < payload.amount) {
            alert("You do not have enough holdings available")
          }
          else {
            this.sellAmount = '';
            this.$store.commit('sellStocks', payload);
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
