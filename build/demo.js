import RuntimeTemplateCompiler from '../src'
import Vue from 'vue'
import Demo from './Demo.vue'

Vue.use(RuntimeTemplateCompiler)

export default new Vue({
  el: '#app',
  render: (h) => h(Demo)
})
