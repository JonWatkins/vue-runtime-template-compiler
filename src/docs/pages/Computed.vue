<template>
  <div class="page">
    <h1 id="top" class="display-4 mb-3">
      <router-link to="/guide/computed#top" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Computed
      </router-link>
    </h1>

    <p>
      Just like the <code>methods</code> the <code>computed</code> properties
      are available in the <code>vue-runtime-template-compiler</code>. The same
      as the other parent property you use them as if you are writing bindings
      in the parent's compiled template.
    </p>

    <pre class="language-html mb-4"><code>{{ example | trim }}</code></pre>

    <PageNav>
      <template v-slot:left>
        <router-link to="/guide/methods">
          <i class="fas fa-arrow-left"></i>
          Methods
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/guide/props">
          Props
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
  data: () => ({
    userName: 'Bob',
    template: \`<div>{{ greeting }}!<\/div>\`,
  }),
  computed: {
    greeting() {
      return \`Hello my name is \${this.userName}\`
    }
  }
}
<\/script>
`

export default {
  name: 'Computed',

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
