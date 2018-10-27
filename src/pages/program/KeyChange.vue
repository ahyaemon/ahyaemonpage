<template>
    <div>
        <ProgramMenu/>
        <hr/>
        key change
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import ProgramMenu from "@components/ProgramMenu.vue"

    @Component({
        components: {
            ProgramMenu,
        }
    })
    export default class KeyChange extends Vue {
    }
</script>