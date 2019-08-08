<template>
    <div class="bottom">
<!--        {{a}}-->
        <el-image class="album-img"
                style="width: 10vw; height: 10vw"
                :src="getImgUrl"
                ></el-image>
        <audio v-bind:src="getPlayUrl" controls="controls">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>

    export default {
        name: "index",
        data(){
            return {
                // url:this.$store.state.detail.playUrl,
                a:'1',
            }
        },
        computed:{
            getPlayUrl(){
                return this.$store.state.detail.playUrl
            },
            getImgUrl(){
                return this.$store.state.detail.imgUrl
            }
        },
        created() {
            // console.log('url',this.url);
            let _this = this;
            setTimeout(function () {
                _this.a = 10;
            },3000)
        }
    }
</script>

<style scoped>
    .bottom{
        position: absolute;
        bottom: 2vh;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .album-img{
        margin-right: 2vw;
        border-radius: 50%;
        border: 1px solid #eee;

        animation: rota 5s linear infinite;
    }
    @keyframes rota {
        0% {transform: rotate(0)}
        100% {transform: rotate(360deg)}
    }

</style>