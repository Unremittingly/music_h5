<template>
    <div>
        <Bottom></Bottom>
        <div class="content">
            content
        </div>
        <Header></Header>
    </div>

</template>

<script>

    import Bottom from '../../components/bottom/index'
    import Header from '../../components/head/index'
    export default {
        name: "index",
        components: {
            Bottom,
            Header
        }
    }
</script>

<style scoped>

</style>