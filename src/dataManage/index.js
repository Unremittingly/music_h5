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

export const getPlayUrl = function (id) {
    let url = 'https://v1.itooi.cn/tencent/url?id=' + id + '&quality=320&isRedirect=0';
    return getUrl(url);
};

export const getImgUrl = function (id) {
    let url = 'https://v1.itooi.cn/tencent/pic?id='+id+'&isRedirect=0';
    return getUrl(url);
}

