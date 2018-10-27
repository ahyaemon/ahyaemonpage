<template>
    <div>
        <OtherMenu/>
        <hr/>
        <h2>虫食い算やろうぜ！！</h2>
        <p>虫食い算のサイトも運営しているよ</p>
        <a href="http://musikui.sakura.ne.jp/" target="_blank">→ 虫食い算やろうぜ！！</a>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import OtherMenu from "@components/OtherMenu.vue"

    @Component({
        components: {
            OtherMenu,
        }
    })
    export default class Musikui extends Vue {
    }
</script>