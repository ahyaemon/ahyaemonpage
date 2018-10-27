<template>
    <div>
        <MusicMenu/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import MusicMenu from "@components/MusicMenu.vue"

    @Component({
        components: {
            MusicMenu
        }
    })
    export default class Music extends Vue {
    }
</script>

<style scoped>
</style>