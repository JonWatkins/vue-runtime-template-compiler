<template>
  <component :is="compiled" v-if="compiled" />
</template>

<script>
'use strict'

import { compileToFunctions } from 'vue-template-compiler'
import { mergeAll, merge } from '../utils/helpers'
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

    compilerOptions: {
      type: Object,
      default: () => config.defaultCompilerOptions
    },

    templateProps: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      isCompiling: false,
      compiled: null
    }
  },

  computed: {
    componentProps() {
      const data = [
        this.parentData,
        this.parentProps,
        this.parentComponent._provided
      ]
      return {
        filters: this.parentFilters,
        components: this.parentComponents,
        computed: this.parentComputed,
        methods: this.parentMethods,
        data: () => mergeAll(data)
      }
    },

    parentComponent() {
      return this.parent || this.$parent
    },

    parentData() {
      return this.parentComponent.$data || {}
    },

    parentProps() {
      return this.parentComponent.$props || {}
    },

    parentOptions() {
      return this.parentComponent.$options || {}
    },

    parentComputed() {
      return this.parentOptions.computed || {}
    },

    parentComponents() {
      return this.parentOptions.components || {}
    },

    parentMethods() {
      return this.parentOptions.methods || {}
    },

    parentFilters() {
      return this.parentOptions.filters || {}
    }
  },

  beforeMount() {
    this.compile()
  },

  methods: {
    compile() {
      const component = compileToFunctions(this.template, this.compilerOptions)
      this.compiled = merge(component, this.componentProps, true)
    }
  }
}
</script>
