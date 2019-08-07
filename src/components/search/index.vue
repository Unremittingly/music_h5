<template>
    <div class="search">
        <el-input v-model="input" placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search" @click="searchHandel"></el-button>
        </el-input>
    </div>
</template>

<script>

    import {search} from '../../dataManage/index'

    export default {
        name: "index",
        data:function(){
          return {
              input:'text1',
          }
        },


        methods:{
            searchHandel(){
                let _this = this;
                let keywords = this.input;
                search({
                    keywords
                }).then(function (data) {
                    _this.$emit('result',data);

              });
            }
        }
    }
</script>

<style scoped>
    .search{
        height: 10vh;
    }
</style>