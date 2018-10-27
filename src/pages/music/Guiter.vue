<template>
    <div>
        <MusicMenu/>
        <hr/>
        <h2>ギター系</h2>
        <h3>2018</h3>
        <MusicRecord title="好きなことだけして生きるにはどうすればいいの" src="./music/guiter/好きなことだけして生きるにはどうすればいいの.mp3" hasLylics="true">
            <p>昨日と同じご飯 同じ時間に食べる</p>
            <p>明日も同じご飯 同じ時間に食べる 予定</p>
            <br/>
            <p>どうしてこんなに代わり映えのない 日々ばかりなの</p>
            <p>考えても考えても考えても わからない</p>
            <br/>
            <p>鏡の奥の誰か 少しずつ老けてゆく</p>
            <p>鏡の前の僕が 少しずつ老けてゆく から</p>
            <br/>
            <p>好きなことだけして生きるにはどうすればいいの</p>
            <p>考えても考えても考えても わからない</p>
        </MusicRecord>
        <MusicRecord title="ヨーグルト" src="./music/guiter/ヨーグルト.mp3" hasLylics="true">
            <p>昨日の夜から 出しっぱなしのヨーグルト</p>
            <p>もしかしたら 腐ってるかもしれないけれど 飲んでみたよ</p>
            <br/>
            <p>最近なんだか暑くって 太陽が暑くって</p>
            <p>外に出たら 干からびてしまいそう</p>
            <p>外に出られない</p>
            <br/>
            <p>早く秋が 訪れないかな</p>
            <p>秋が来れば 暑さに怯えることもない</p>
        </MusicRecord>

        <h3>2017</h3>
        <MusicRecord title="かわいそうなにんじん" src="./music/guiter/かわいそうなにんじん.mp3" hasLylics="true">
            <p>可哀そうなにんじんは 今日も一人で暮らしてる</p>
            <p>三角コーナーの中で独りぼっち</p>
            <br/>
            <p>三角コーナーの中で・・・</p>
            <br/>
            <p>成長していた！</p>
            <p>誰にも気づかれないように</p>
            <p>成長していた！</p>
            <br/>
            <p>可哀そうなにんじんは 今日も一人で暮らしてる</p>
            <p>可哀そうなにんじんは 今日も一人で暮らしてる</p>
        </MusicRecord>

        <h3>2015</h3>
        <MusicRecord title="なんにもしたくない" src="./music/guiter/なんにもしたくない.mp3" hasLylics="true">
            <p>なんにもしたくない なんにもしたくない</p>
            <p>なんにもしたくない なんにもしたくない</p>
            <br/>
            <p>学校に行きたくない 会社に行きたくない</p>
            <p>なんにもしたくない なんにもしたくない</p>
            <br/>
            <p>けど</p>
            <br/>
            <p>人生って素晴らしい 人生って素晴らしい</p>
            <p>人生って素晴らしいと 思ったのさ</p>
            <br/>
            <p>何か新しいことを始めようと思って</p>
            <p>新しいことを始めようとしたのに</p>
            <p>今日も一日を</p>
            <p>無駄に過ごしてしまう</p>
            <br/>
            <p>けど</p>
            <br/>
            <p>人生って素晴らしい 人生って素晴らしい</p>
            <p>人生って素晴らしいと 思ったのさ</p>
            <br/>
            <p>~ 伴奏 ~</p>
            <br/>
            <p>けど</p>
            <br/>
            <p>人生って素晴らしい 人生って素晴らしい</p>
            <p>人生って素晴らしいと 思ったのさ</p>
        </MusicRecord>

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
    export default class Guiter extends Vue {
    }
</script>