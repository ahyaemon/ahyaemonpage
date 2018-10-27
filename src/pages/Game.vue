<template>
    <div>
        <GameMenu/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import GameMenu from "@components/GameMenu.vue"

    @Component({
        components: {
            GameMenu
        }
    })
    export default class Game extends Vue {
    }
</script>

<style scoped>
</style>