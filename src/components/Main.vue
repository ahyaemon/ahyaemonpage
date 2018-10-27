<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Main extends Vue {
    }
</script>
