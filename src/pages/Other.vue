<template>
    <div>
        <OtherMenu/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import OtherMenu from "@components/OtherMenu.vue"

    @Component({
        components: {
            OtherMenu
        }
    })
    export default class Other extends Vue {
    }
</script>

<style scoped>
</style>