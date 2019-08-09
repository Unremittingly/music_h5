
const state = {
    searchResult:[],
    searchParams:{}
};

const getters = {};

const actions = {};

const mutations = {
    setResults(state,result){
        state.searchResult = result;
    },
    setSearchParams(state,params){
        state.searchParams = params;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
