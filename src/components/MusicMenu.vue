<template>
    <div>
        <h2>自作曲</h2>
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
            { url: "/music/guiter", title: "ギター系" },
            { url: "/music/dtm", title: "DTM系" },
            { url: "/music/miku", title: "初音ミク系" },
        ]

    }
</script>

<style scoped>
</style>