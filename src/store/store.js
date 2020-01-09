import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funds: 10000,
        stockInfo: [
            {name: 'BMW', price: 90, holding: 0},
            {name: 'Apple', price: 100, holding: 0},
            {name: 'GM', price: 110, holding: 0},
            {name: 'Uber', price: 120, holding: 0}
        ],
    },
    getters: {
        getAvailableFunds: state => {
            return state.funds
        },
        getStockInfo: state => {
            return state.stockInfo
        },
        getPortfolio: state => {
            let portfolio = [];
            for (let i = 0; i < state.stockInfo.length; i++) {
                if (state.stockInfo[i].holding > 0) {
                    portfolio.push(state.stockInfo[i])
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
            state.stockInfo[payload.index].holding += Number(payload.amount);
            state.funds -= payload.price * payload.amount;
        },
        updatePricing: (state, payload) => {
            for (let i = 0; i < payload.length; i++) {
                state.stockInfo[i].price = payload[i];
            }
        },
        sellStocks: (state, payload) => {
            state.stockInfo[payload.index].holding -= Number(payload.amount);
            state.funds += payload.price * payload.amount;
        },
        setFromDB: (state, payload) => {
            state.funds = payload.funds;
            state.stockInfo = payload.stockInfo
        }
    },
    actions: {
        setFromDB: ({ commit }, payload) => {
            commit('setFromDB', payload)
        },
    }
})