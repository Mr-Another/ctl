<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
            >vue-cli documentation</a
            >.
        </p>
        <h3>Installed CLI Plugins</h3>
        <h3>Essential Links</h3>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
    import routing from './routing'
    export default {
        name: "HelloWorld",
        mixins:[routing],
        props: {
            msg: String
        },
        created() {
            console.log(this.msgname)
        }
    };
</script>
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        width: 100%;
        height: 20px;
        margin: 0 10px;
        background: #f90;
    }
    a {
        color: #42b983;
    }
</style>
