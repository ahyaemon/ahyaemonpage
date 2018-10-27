<template>
    <div>
        <ul>
            <li v-for="link in links" :key="link.url">
                <router-link :to="link.url">{{ link.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class MainMenu extends Vue {

        links = [
            { url: "/about", title: "このサイトについて" },
            { url: "/history", title: "歴史" },
            { url: "/book", title: "本" },
            { url: "/music", title: "自作曲" },
            { url: "/game", title: "自作ゲーム" },
            { url: "/program", title: "自作プログラム" },
            { url: "/other", title: "その他" },
        ]

    }
</script>

<style scoped>
</style>