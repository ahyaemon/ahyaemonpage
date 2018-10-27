<template>
    <div>
        <MusicMenu/>
        <hr/>
        <h3>DTM系</h3>
        <p>音量でかいかも</p>
        <h3>2017</h3>
        <MusicRecord title="juvenile" src="./music/dtm/juvenile.mp3" hasLylics="false"/>
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
    export default class Dtm extends Vue {
    }
</script>