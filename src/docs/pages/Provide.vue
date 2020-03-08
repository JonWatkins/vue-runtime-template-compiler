<template>
  <div class="page">
    <h1 id="top" class="mb-3">
      <router-link to="/guide/provide#top" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Provide
      </router-link>
    </h1>

    <p>
      Just like the <code>props</code> the <code>provide</code> properties are
      available in the <code>vue-runtime-template-compiler</code>. The same as
      the other parent property you use them as if you are writing bindings in
      the parent's compiled template.
    </p>

    <pre class="language-html mb-4"><code>{{ example | trim }}</code></pre>

    <PageNav>
      <template v-slot:left>
        <router-link to="/guide/props">
          <i class="fas fa-arrow-left"></i>
          Props
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/guide/filters">
          Filters
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
  <runtime-template-compiler :template="template" \/>
<\/template>

<script>
import { RuntimeTemplateCompiler } from 'vue-runtime-template-compiler'

export default {
  components: {
    RuntimeTemplateCompiler
  },
  provide: {
    name: 'Bob'
  }
  data: () => ({
    template: \`<div>{{ name }}!<\/div>\`,
  })
}
<\/script>
`

export default {
  name: 'Provide',

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
