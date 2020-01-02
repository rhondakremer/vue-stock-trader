<template>
  <div class="container" style="text-align:center; border:1px solid gray; ">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">Trade or View your portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new day!</p>
        <hr>
        <h4>Your Funds: {{ getAvailableFunds }}</h4>
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
