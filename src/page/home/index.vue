<template>
    <div class="contain">
        <Header></Header>
        <Search></Search>
        <div class="content">
            <Banner/>
            <el-tabs>
                <el-tab-pane label="热门" name="first">热门</el-tab-pane>
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
</style>