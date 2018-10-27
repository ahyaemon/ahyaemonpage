<template>
    <div>
        <h1>
            <router-link to="/">
                あひゃえもんのページ
            </router-link>
        </h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Title extends Vue {
    }
</script>

<style lang="scss" scoped>
    h1 {
        a {
            color: black;
            text-decoration: none;
        }
    }
</style>