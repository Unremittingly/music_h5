<template>
    <div class="bottom">
        <audio :src="url" controls="controls">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
    export default {
        name: "index",
        props:{
            url:{
                type:String,
                default:'',
            }
        },
        created() {
            console.log('url',this.url);
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