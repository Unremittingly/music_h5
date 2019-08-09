<template>
    <div class="list">

        <Header></Header>
        <Search @result="getResultfn" :type="type"></Search>
        <div id="result">
            <List :data='data2'></List>
        </div>


        <Bottom ></Bottom>
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
                // data: [],
                t: '11',
                type:2
            }
        },
        computed:{
            data2(){
                let d2 = [];
                console.log('1',this.$store.state.list);
                let data = this.$store.state.list.searchResult;
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
                        d2.push(obj);
                    }else{
                        break;
                    }
                }
                return d2;
            }
        },
        methods: {
            getResultfn(data) {
                // var a = this.data.slice(0)
                // console.log('data',data);
                // console.log('this',this.t);
                // this.$set(this.data ,0, data[1])
                // console.log('this.data',this.data);
                //子父组件之间的传值   子传父

            }
        },

    }
</script>

<style scoped>
    .song-item {
        margin: 10px 0;
    }

</style>