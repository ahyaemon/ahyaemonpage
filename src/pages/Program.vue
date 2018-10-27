<template>
    <div>
        <ProgramMenu/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ProgramMenu from "@components/ProgramMenu.vue"

    @Component({
        components: {
            ProgramMenu
        }
    })
    export default class Program extends Vue {
    }
</script>

<style scoped>
</style>