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
        getPortfolio: state => {
            let portfolio = [];
            for (let i = 0; i < state.stockPrices.length; i++) {
                if (state.stockPrices[i].holding > 0) {
                    portfolio.push(state.stockPrices[i])
                }
            }
            if (portfolio.length) {
                return portfolio
            }
            return false;
        },
    },
    mutations: {
        buyStocks: (state, payload) => {
            state.stockPrices[payload.index].holding += Number(payload.amount);
            state.funds -= payload.price * payload.amount;
        },
        updatePricing: (state, payload) => {
            for (let i = 0; i < payload.length; i++) {
                state.stockPrices[i].price = payload[i];
            }
        },
        sellStocks: (state, payload) => {
            state.stockPrices[payload.index].holding -= Number(payload.amount);
            state.funds += payload.price * payload.amount;
        },
        setFromDB: (state, payload) => {
            state.funds = payload.funds;
            state.stockPrices = payload.stockPrices
        }
    },
    actions: {
        setFromDB: ({ commit }, payload) => {
            commit('setFromDB', payload)
        },
    }
})