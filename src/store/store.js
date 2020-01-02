import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stockPrices: [
            {name: 'stock1', price: 90, holding: 0},
            {name: 'stock2', price: 100, holding: 0},
            {name: 'stock3', price: 110, holding: 0},
            {name: 'stock4', price: 120, holding: 0}
        ],
    },
    getters: {
        getAvailableFunds: state => {
            return state.funds
        },
        getStockInfo: state => {
            return state.stockPrices
        },
    },
    mutations: {

    },
    actions: {

    }
})