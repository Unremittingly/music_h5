
const state = {
    id:0,
    playUrl:''

};

const getters = {};

const actions = {};

const mutations = {
    setId(state,id){
        state.id = id;
    },

    setPic(state,url){
        state.url = url;
    },

    setPlayUrl(state,url){
        state.playUrl = url;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
