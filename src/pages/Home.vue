<template>
    <div>
        <p>ようこそ</p>
        <Puzzle/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import Puzzle from "@components/Puzzle.vue"

    @Component({
        components: {
            Puzzle
        }
    })
    export default class Home extends Vue {
    }
</script>