<template>
    <div>
        <h2>自作プログラム</h2>
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
            { url: "/program/tuner", title: "TUNER" },
            { url: "/program/key-change", title: "ギターコード移調確認" },
        ]

    }
</script>

<style scoped>
</style>