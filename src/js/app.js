// 0. モジュールシステムを使っている場合 (例: vue-cli 経由で)、Vue と VueRouter をインポートし、`Vue.use(VueRouter)` を呼び出します。
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 1. ルートコンポーネントを定義します
// 他のファイルからインポートすることもできます

import Video from './components/video/video.vue'

import Home from './components/home.vue'

import SourceBox from './components/sourceBox.vue'

import VueHighlightJS from 'vue-highlightjs'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(ElementUI, {
  locale
})


// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

Vue.component("source-box", SourceBox)

const Foo = {
  template: '<div>foo</div>'
}
const Bar = {
  template: '<div>bar</div>'
}

// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
// ネストされたルートに関しては後で説明します
const routes = [
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

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
const app = new Vue({
  router
}).$mount('#app')

// これで開始です!
