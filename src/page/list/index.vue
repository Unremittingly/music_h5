<template>
    <div class="list">

        <Header></Header>
        <Search @result="getResultfn"></Search>
        <div id="result">
            <List :data='data'></List>
        </div>

        <Bottom :url="url"></Bottom>
    </div>
</template>

<script>
    import Bottom from '../../components/bottom/index';
    import Header from '../../components/head/index';
    import Search from '../../components/search/index';
    import List from '../../components/list/index';

    export default {
        name: "index",
        components: {
            Bottom,
            Header,
            Search,
            List
        },

        data: function () {
            return {
                data: [],
                t: '11',
                url:this.$store.state.detail.playUrl
            }
        },
        methods: {
            getResultfn(data) {
                // var a = this.data.slice(0)
                // console.log('data',data);
                // console.log('this',this.t);
                // this.$set(this.data ,0, data[1])
                // console.log('this.data',this.data);

                for (let i = 0; i < data.length; i++) {
                    if (i < 5) {
                        let item = data[i];
                        let obj = {
                            name: item.songname,//歌曲名称
                            singer: item.singer[0],//歌手
                            songId: item.media_mid,//歌曲id
                            album: {
                                albumname: item.albumname,
                                albummid: item.albummid,
                                albumid: item.albumid
                            },//专辑
                            songurl: item.songurl,
                            strMediaMid: item.strMediaMid
                        }
                        this.$set(this.data, i, obj);
                    }else{
                        break;
                    }
                }
            }
        },

    }
</script>

<style scoped>
    .song-item {
        margin: 10px 0;
    }

</style>