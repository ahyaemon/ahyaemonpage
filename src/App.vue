<template>
    <div>
        <Title/>
        <MainMenu/>
        <hr/>
        <Main/>
        <hr/>
        <Footer/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

import Title from "@components/Title.vue"
    import MainMenu from "@components/MainMenu.vue"
    import Main from "@components/Main.vue"
    import Footer from "@components/Footer.vue"

    @Component({
      components: {
        Title,
        MainMenu,
        Main,
        Footer,
      }
    })
    export default class App extends Vue {
    }
</script>

<style>
    body {
        font-family: 游ゴシック, YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
    }

    ul {
        padding: 0 0 0 10px;
        margin: 0 0 0 0;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        color: rgb(100, 117, 99);
        text-decoration: underline;
    }

    p {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }
</style>