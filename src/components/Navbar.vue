<template>
    <div style="display:flex; justify-content:space-around; align-items:center; border:1px solid black; margin-bottom:2%">
        <h2>Stock Trader</h2>
        <ul class="nav nav-pills">
            <router-link to="/" tag="li"><a>Home</a></router-link>
            <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav nav-pills">
            <li @click="endDay">End Day</li>
            <li @click="clickTest">Save and Load</li>
            <li>Funds: ${{ getAvailableFunds }}</li>
        </ul>
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
    methods: {
        clickTest() {
            console.log("that's a good click there")
        },
        endDay() {
            let cost = Math.floor(Math.random() * (150 - 40 + 1) + 180);
            console.log(cost)
        }
    }
    
}
</script>