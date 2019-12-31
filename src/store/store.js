import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        funLevel: 6
    },
    getters: {
        getFunLevel: state => {
            return state.funLevel
        }
    },
    mutations: {

    },
    actions: {

    }
})