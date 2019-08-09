<template>
    <div class="song-item" @click="play(item.songId)">
        <div class="song-info item-i">
            <div class="song-name">{{item.name}}</div>
            <div class="song-album"> {{item.album.albumname}}</div>
        </div>
        <div class="song-singer item-i" v-bind:data-mid="item.singer.mid" v-bind:data-id="item.singer.id">{{item.singer.name}}</div>
        <div class="song-opera item-i"><i class="el-icon-download" @click="downLoad(item)"></i></div>
    </div>
</template>

<script>
    import {getPlayUrl, getImgUrl} from "../../dataManage";

    export default {
        name: "item",
        props: {
            item: {
                type: Object,
                default: () => {
                }
            }
        },
        methods: {
            play(id) {

                let _this = this;
                _this.$store.commit('detail/setId', id);//存vuex

                getPlayUrl(id).then(function (data) {
                    _this.$store.commit('detail/setPlayUrl', data.data.data);//存vuex
                });

                getImgUrl(id).then(function (data) {
                    _this.$store.commit('detail/setImgUrl', data.data.data);
                })

            },
            downLoad(item) {
                let id = item.id;

                getPlayUrl(id).then(function (data) {
                    if (data.data.code === '200') {
                        const ele = document.createElement('a');
                        ele.setAttribute('href', data.data.data); //设置下载文件的url地址
                        ele.setAttribute('download', item.name);//用于设置下载文件的文件名
                        ele.click();
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .song-item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
        height: 10vh;
        padding: 10px;
        background: #eee;
    }

    .song-item .item-i {
        width: 30%;

    }

    .song-item div {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .song-info div {
        margin-top: 5px;
    }
</style>