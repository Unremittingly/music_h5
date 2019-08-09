<template>
    <div class="search">
        <el-input v-model="input" ref="searchTag" placeholder="请输入内容"  >
            <el-button slot="append" icon="el-icon-search" @click="searchHandel"></el-button>
        </el-input>
    </div>
</template>

<script>

    import {search} from '../../dataManage/index'

    export default {
        name: "index",
        props: {
            type: {
                type: Number,
                default: 1,//默认首页
            }
        },
        data: function () {
            return {
                input: '童年',
            }
        },



        methods: {

            searchHandel() {

                let _this = this;
                let keywords = this.input;
                search({
                    keywords
                }).then(function (data) {
                    //   //子父组件之间的传值   子传父  暂时不用啦  用的vuex方便一点
                    // _this.$emit('result', data);
                    _this.$store.commit('list/setResults',data);
                    _this.$store.commit('list/setSearchParams',{keywords});
                    if(_this.type ===1){
                        _this.$router.push('/list');
                    }

                });
            }
        }
    }
</script>

<style scoped>
    .search {
        height: 10vh;
    }
</style>