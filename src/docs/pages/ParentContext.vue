<template>
  <div class="page">
    <h1 id="top" class="display-4 mb-3">
      <router-link to="/guide/parent-context#top" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Parent Context
      </router-link>
    </h1>
    <p>
      The template you pass has access to the parent component scope. You can
      access computed properties and methods as well from the template.
    </p>
    <p>
      However if you have wrapped the <code>runtime-template-compiler</code> in
      another component it may be necessary to set the
      <code>parent</code> property on the compiler component, else you might end
      up with the wrong scope being bound.
    </p>
    <pre class="language-html mb-4"><code>{{ example | trim }}</code></pre>

    <PageNav>
      <template v-slot:left>
        <router-link to="/guide/getting-started">
          <i class="fas fa-arrow-left"></i>
          Getting Started
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/guide/methods">
          Methods
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </template>
    </PageNav>
  </div>
</template>

<script>
import PageNav from '../components/PageNav.vue'

const example = `
<template>
  <wrapper-component>
    <runtime-template-compiler :template="template" :parent="parentComponent" \/>
  <\/wrapper-component>
<\/template>

<script>
import { RuntimeTemplateCompiler } from 'vue-runtime-template-compiler'
import WrapperComponent from './WrapperComponent.vue'

export default {
  components: {
    RuntimeTemplateCompiler,
    WrapperComponent
  },
  data: () => ({
    parentComponent: this,
    userName: 'Bob',
    template: \`<div>Hello {{ userName }}!<\/div>\`,
  })
}
<\/script>
`

export default {
  name: 'ParentContext',

  components: {
    PageNav
  },

  data() {
    return {
      example
    }
  }
}
</script>
