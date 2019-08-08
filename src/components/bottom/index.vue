<template>
    <div class="bottom">
<!--        {{a}}-->
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
        bottom: 0;
        left: 0;
        width: 100%;
    }
</style>