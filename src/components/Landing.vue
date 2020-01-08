<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <hr>
        <h1 class="card-title">Trade or View your portfolio</h1>
        <hr>
        <p>Get started by clicking on Stocks and making a purchase.</p>
        <p>Click on 'End Day' to begin a new day!</p>
        <p>You can sell stocks from your Portfolio to increase your funds.</p>
        <p>Click on Save/Load Data to save your current portfolio or load your previous saved portfolio.</p>
        <hr>
        <h4>Your Funds: ${{ getAvailableFunds }}</h4>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'getAvailableFunds'
        ])
    },
    
}
</script>

<style scoped>
.container {
  text-align:center; 
  background-color: whitesmoke;
  border-radius: 0.3rem;
  margin-top: 3%;
}

hr {
  border-top: 2px solid #337ab7!important;
  width: 80%;
}
</style>
