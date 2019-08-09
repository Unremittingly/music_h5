<template>
    <div class="bottom">
<!--        {{a}}-->
       <albumImg/>
        <audio v-bind:src="getPlayUrl" controls="controls">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>

    import albumImg from '../albumImg'
    export default {
        name: "index",
        components:{
            albumImg
        },
        data(){
            return {
                // url:this.$store.state.detail.playUrl,
                a:'1',
            }
        },
        computed:{
            getPlayUrl(){
                return this.$store.state.detail.playUrl
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


</style>