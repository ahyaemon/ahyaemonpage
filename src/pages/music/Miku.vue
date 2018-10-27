<template>
    <div>
        <MusicMenu/>
        <hr/>
        <h2>初音ミク系</h2>
        <p>音量でかいかも</p>
        <h3>2017</h3>
        <MusicRecord title="山茶花" src="./music/miku/山茶花.mp3" hasLylics="false"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import MusicMenu from "@components/MusicMenu.vue"
    import MusicRecord from "@pages/music/MusicRecord.vue"

    @Component({
        components: {
            MusicMenu,
            MusicRecord,
        }
    })
    export default class Miku extends Vue {
    }
</script>