<template>
  <component :is="compiled" v-if="compiled" />
</template>

<script>
import { compileToFunctions } from 'vue-template-compiler'
import { merge } from '../utils/helpers'
import config from '../utils/config'

export default {
  name: 'RuntimeTemplateCompiler',

  inheritAttrs: false,

  props: {
    parent: {
      type: Object,
      default: undefined
    },

    template: {
      type: String,
      default: config.defaultRuntimeTemplate
    },

    templateProps: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      compiled: null
    }
  },

  beforeMount() {
    const compiled = compileToFunctions(this.template)
    const parent = this.parent || this.$parent
    const data = parent.$data || {}
    const props = parent.$props || {}
    const options = parent.$options || {}

    const computed = options.computed || {}
    const components = options.component || {}
    const methods = options.methods || {}
    const filters = options.filters || {}

    this.compiled = Object.assign({}, compiled, {
      name: 'RuntimeComponent',
      data() {
        return merge(data, props)
      },
      filters,
      components,
      computed,
      methods
    })
  }
}
</script>
