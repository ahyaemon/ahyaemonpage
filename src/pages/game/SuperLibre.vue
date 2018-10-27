<template>
    <div>
        <GameMenu/>
        <hr/>
        <h2>SUPER LIBRE</h2>
        <p>全く新しい2Dアクションが完成しました。</p>
        <img src="img/super-libre/super-libre.png"/>
        <p>windows7, 8, vista, 10あたりで動作するはずです。</p>
        <br/>
        <p><a href="game/SUPER LIBRE.zip">SUPER LIBRE ダウンロード(zipで直接)</a></p>
        <p><a href="https://www.freem.ne.jp/win/game/16042" target="_blank">SUPER LIBRE ダウンロード(ふり～む)</a></p>
        <br/>
        <p>クリアすると豪華な特典があるので、是非やってみてください。</p>
        <p>頑張れば2分ちょっとで全クリできます。(全6面)</p>
        <p><small>HOW画面から7面に行けます（隠し）</small></p>
        <br/>
        <p>プレイ方法は、同梱してある説明書に書いてあります。</p>
        <br/>
        <p>・開発環境的な話</p>
        <p>DXライブラリとc++で作りました。</p>
        <br/>
        <p>※ ノートン先生がPCにインストールされていると、ウィルスだと判断されるみたいですが、ウィルスではありません。。</p>
        <p>   (ダウンロード数が少ないうちはそうなるみたいです)</p>
        <br/>
        <p>2017/12/2 ver1.01</p>
        <p>2017/10/23 ver1.00    </p>
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
    export default class SuperLibre extends Vue {
    }
</script>

<style scoped>
    img {
        max-width: 100%;
    }

    small {
        font-size: 60%;
    }
</style>
