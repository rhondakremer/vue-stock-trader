<template>
    <div>
        <p v-for="stock in getStockInfo" :key="stock.name">{{ stock.name }}: {{ stock.holding }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'getStockInfo'
        ])
    }
}
</script>