<template>
    <article>
        <p>{{ title }}</p>
        <audio :src="src" controls=""></audio>
        <p @click="switchLylics" v-if="_hasLylics"><a>歌詞</a></p>
        <div class="lylics" v-if="isActive">
            <slot></slot>
        </div>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Prop } from "vue-property-decorator"
    import Component from 'vue-class-component'
    import MusicMenu from "@components/MusicMenu.vue"

    @Component({
        components: {
            MusicMenu
        }
    })
    export default class MusicRecord extends Vue {

        @Prop() title!: string
        @Prop() src!: string
        @Prop() hasLylics!: string
        isActive = false

        switchLylics() {
            this.isActive = !this.isActive
        }

        get _hasLylics(): boolean {
            return this.hasLylics == "true"
        }

    }
</script>

<style scoped>
    .lylics {
        background-color: rgb(215, 247, 225, 0.3);
        border-radius: 4px;
        padding: 10px;
    }

    article {
        margin-bottom: 40px;
    }
</style>