<template>
    <div class="contain">
        <Header></Header>
        <Search></Search>
        <div class="content">
            <Banner/>
            <el-tabs>
                <el-tab-pane label="热门" name="first">
                    <div class="hot"
                         v-loading="loading"
                         element-loading-text="拼命加载中"
                         element-loading-spinner="el-icon-loading"
                    >热门</div>
                </el-tab-pane>
                <el-tab-pane label="最新" name="second">最新</el-tab-pane>
            </el-tabs>
        </div>

        <Bottom></Bottom>
    </div>

</template>

<script>

    import Bottom from '../../components/bottom/index';
    import Header from '../../components/head/index';
    import Search from '../../components/search/index';
    import Banner from '../../components/banner/index';

    export default {
        name: "index",
        data(){
            return {
                loading:true
            }
        },
        components: {
            Bottom,
            Header,
            Search,
            Banner
        }
    }
</script>

<style scoped>

    .contain {
        position: relative;
        height: 100vh;
    }

    .el-tab-pane,.hot{
        height: 30vh;
    }
</style>