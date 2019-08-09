<template>
    <el-image class="album-img" :class="className"
              :src="getImgUrl"
    ></el-image>
</template>

<script>
    export default {
        name: "albumImg",
        props:{
            className:{
                type:String,
                default:'bottom_img'
            }
        },
        computed:{
            getImgUrl(){
                return this.$store.state.detail.imgUrl
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .album-img{
        margin-right: 2vw;
        border-radius: 50%;
        border: 1px solid #eee;

        animation: rota 5s linear infinite;
    }

    .album-img.bottom_img{
        width: 10vw;
        height: 10vw;
    }
    @keyframes rota {
        0% {transform: rotate(0)}
        100% {transform: rotate(360deg)}
    }

</style>