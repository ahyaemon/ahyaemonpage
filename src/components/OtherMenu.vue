<template>
    <div>
        <h2>その他</h2>
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
    export default class MusicMenu extends Vue {

        links = [
            { url: "/other/musikui", title: "虫食い算やろうぜ！！" },
        ]

    }
</script>

<style scoped>
</style>