import Vue from 'vue'
import VueRouter from 'vue-router'

import 'babel-polyfill'

Vue.use(VueRouter)

import Octicon from 'vue-octicon/components/Octicon.vue'
import 'vue-octicon/icons'

Vue.component('octicon', Octicon);

import Video from './components/video/video.vue'

import Home from './components/home.vue'

import SourceBox from './components/sourceBox.vue'

import VueHighlightJS from 'vue-highlightjs'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(ElementUI, {
  locale
})


Vue.use(VueHighlightJS)

Vue.component("source-box", SourceBox)

const Foo = {
  template: '<div>foo</div>'
}
const Bar = {
  template: '<div>bar</div>'
}

const routes = [{
    path: '/',
    redirect: to => {
      return 'home'
    }
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    path: '/video/:id',
    component: Video
  }
]

const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

const app = new Vue({
  router
}).$mount('#app')