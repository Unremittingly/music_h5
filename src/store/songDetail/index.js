
const state = {
    id:0,
    playUrl:'b',
    imgUrl:'//www.baidu.com/img/baidu_resultlogo@2.png'

};

const getters = {};

const actions = {};

const mutations = {
    setId(state,id){
        state.id = id;
    },

    setImgUrl(state,url){
        state.imgUrl = url;
    },

    setPlayUrl(state,url){
        state.playUrl = url;
        // state.url = url;
    }

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
