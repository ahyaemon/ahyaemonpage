import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"

import Home from "@pages/Home.vue"
import About from "@pages/About.vue"
import History from "@pages/History.vue"
import Book from "@pages/Book.vue"

import Music from "@pages/Music.vue"
import Guiter from "@pages/music/Guiter.vue"
import Dtm from "@pages/music/Dtm.vue"
import Miku from "@pages/music/Miku.vue"

import Game from "@pages/Game.vue"
import SuperLibre from "@pages/game/SuperLibre.vue"
import MagicalSwitchPlus from "@pages/game/MagicalSwitchPlus.vue"

import Program from "@pages/Program.vue"
import Tuner from "@pages/program/Tuner.vue"
import KeyChange from "@pages/program/KeyChange.vue"

import Other from "@pages/Other.vue"
import Musikui from "@pages/other/Musikui.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About},
  { path: "/history", component: History},
  { path: "/book", component: Book},
  { path: "/music", component: Music},
  { path: "/music/guiter", component: Guiter},
  { path: "/music/dtm", component: Dtm},
  { path: "/music/miku", component: Miku},
  { path: "/game", component: Game},
  { path: "/game/super-libre", component: SuperLibre},
  { path: "/game/magical-switch-plus", component: MagicalSwitchPlus},
  { path: "/program", component: Program},
  { path: "/program/tuner", component: Tuner},
  { path: "/program/key-change", component: KeyChange},
  { path: "/other", component: Other},
  { path: "/other/musikui", component: Musikui},
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
