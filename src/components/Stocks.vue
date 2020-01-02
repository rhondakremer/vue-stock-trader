<template>
  <div class="container">
    <div class="card" style="width: 40rem; border:1px solid black; display:inline-block" v-for="stock in getStockInfo" :key="stock">
      <div class="card-body">
        <h5 class="card-title">{{ stock.name}} (Price: {{ stock.price }})</h5>
        <p class="card-text">
          <input type="text" placeholder="Quantity">
          <button>Buy</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getStockInfo"])
  }
};
</script>
