import axios from 'axios';

export const search = function (params) {
    let {keywords = '', type = 'song', pageSize = 100, page = 0} = params;
    let url = 'https://v1.itooi.cn/tencent/search?keyword=' + keywords + '&type=' + type + '&pageSize=' + pageSize + '&page=' + page + ''
    return axios.get(url, {}).then(function (data) {
        let list = data.data.data.list;
        return Promise.resolve(list);
    })

};

export const postUrl = function () {

};

export const getUrl = function (url) {
    return axios.get(url, {}).then(function (data) {
        return Promise.resolve(data);
    })
};

export const play = function (id) {
    let url = 'https://v1.itooi.cn/tencent/url?id=' + id + '&quality=128';
    return getUrl(url);
};

export const downLoad = function (id = 0) {

};

