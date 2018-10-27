<template>
    <div>
        <h2>本</h2>
        <p>本が好き。</p>
        <p>ヘッセと、太宰治。</p>
        <p>あと尊敬する人は福沢諭吉。</p>
        <small>※ 私は慶応義塾大学出身ではない</small>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Book extends Vue {
    }
</script>