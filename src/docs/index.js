import RuntimeTemplateCompiler from '../index'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VuePrism from 'vue-prism'
import 'prismjs/themes/prism.css'

import arrayToString from './filters/arrayToString'
import trim from './filters/trim'

import App from './App.vue'
import Introduction from './pages/Introduction.vue'
import Installation from './pages/Installation.vue'
import GettingStarted from './pages/GettingStarted.vue'
import ParentContext from './pages/ParentContext.vue'
import ApiReference from './pages/ApiReference.vue'
import Methods from './pages/Methods.vue'
import Computed from './pages/Computed.vue'
import Props from './pages/Props.vue'
import Provide from './pages/Provide.vue'
import Filters from './pages/Filters.vue'
import Sandbox from './pages/Sandbox.vue'

Vue.use(RuntimeTemplateCompiler)
Vue.use(VueRouter)
Vue.use(VuePrism)

Vue.filter('toString', arrayToString)
Vue.filter('trim', trim)

const router = new VueRouter({
  routes: [
    { path: '/', component: Introduction },
    { path: '/installation', component: Installation },
    { path: '/guide/getting-started', component: GettingStarted },
    { path: '/guide/parent-context', component: ParentContext },
    { path: '/guide/methods', component: Methods },
    { path: '/guide/computed', component: Computed },
    { path: '/guide/props', component: Props },
    { path: '/guide/provide', component: Provide },
    { path: '/guide/filters', component: Filters },
    { path: '/api-reference', component: ApiReference },
    { path: '/sandbox', component: Sandbox }
  ],
  base: '/vue-runtime-template-compiler/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
  scrollBehavior(to) {
    /* istanbul ignore next*/
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default new Vue({
  router,
  render: (h) => h(App)
})
