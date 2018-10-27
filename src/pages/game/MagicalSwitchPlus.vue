<template>
    <div>
        <GameMenu/>
        <hr/>
        <h2>MAGICAL SWITCH PLUS</h2>

        <p>javascriptと、phina.jsを使って作りました。</p>
        <br/>
        <p>画面上のボタンを全て押された状態にするとクリアーです。</p>
        <p>元ネタのゲーム（マリオRPG内のミニゲーム）がマジカルスイッチという名前らしいので、その発展版ということでプラスを付けました。</p>
        <p><a href="game/magical-switch-plus/index.html" target="_blank">→ Magical Switch Plus</a></p>
        <br/>
        <p>※ あひゃえもんはLv.10くらいまでしかクリアしていないので、その後の問題がクリア可能かどうかは不明です。</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import GameMenu from "@components/GameMenu.vue"

    @Component({
        components: {
            GameMenu,
        }
    })
    export default class MagicalSwitchPlus extends Vue {
    }
</script>