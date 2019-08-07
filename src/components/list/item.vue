<template>
    <div  class="song-item" @click="play(item.songId)">
        <div class="song-info item-i">
            <div class="song-name">{{item.name}}</div>
            <div class="song-album">  {{item.album.albumname}}</div>
        </div>
        <div class="song-singer item-i" v-bind:data-mid="item.singer.mid" v-bind:data-id="item.singer.id">{{item.singer.name}}</div>
        <div class="song-opera item-i"><el-button type="primary">下载</el-button></div>
    </div>
</template>

<script>
    import {play} from "../../dataManage";
    export default {
        name: "item",
        props:{
            item:{
                type:Object,
                default:()=>{}
            }
        },
        methods:{
            play(id){

                let _this = this;
                let url = 'https://v1.itooi.cn/tencent/url?id=' + id + '&quality=128&isRedirect=0';
                _this.$store.commit('detail/setId',id);//存vuex
                _this.$store.commit('detail/setPlayUrl',url);//存vuex
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

    .song-item .item-i{
        width: 30%;

    }
    .song-item div{
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .song-info div{
        margin-top: 5px;
    }
</style>