<template>
    <div>
        <ProgramMenu/>
        <hr/>
        なんかうまく動かなかったから未公開
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
    export default class Tuner extends Vue {
    }
</script>