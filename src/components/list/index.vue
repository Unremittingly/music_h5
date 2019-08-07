<template>
    <div class="song-list">
        <Item v-for="(item) in data"  :item = "item"></Item>
    </div>
</template>

<script>

    import Item from "./item"

    export default {

        components:{
            Item
        },
        props: {
            data: {
                type:Array,
                default:()=>[]
            }
        },
        data(){
            return {
                result:[]
            }
        },
        name: "item",

        methods:{
            reload() {
                this.$forceUpdate()
            },

        },
    }
</script>

<style scoped>


</style>