import Vue from 'vue';
import Vuex from 'vuex';
import Detail from './songDetail/index'
import List from './list/index'


Vue.use(Vuex);

const state = {};
const actions = {};
const mutations = {
};
const store = new Vuex.Store({
    modules: {
        detail:Detail,
        list:List,
    },
    actions,
    state,
    mutations
});
export default store;
