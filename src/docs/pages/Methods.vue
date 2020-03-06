<template>
  <div class="page">
    <h1 id="top" class="display-4 mb-3">
      <router-link to="/guide/methods#top" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Methods
      </router-link>
    </h1>

    <div class="alert alert-primary mb-4">
      These will behave as if they have been called from within the parent
      component.
    </div>

    <p>
      As with the <code>data</code> object the methods are also available in the
      <code>vue-runtime-template-compiler</code>. You just use them as if you
      are writing bindings in the parent's compiled template.
    </p>

    <pre class="language-html mb-4"><code>{{ example | trim }}</code></pre>

    <PageNav>
      <template v-slot:left>
        <router-link to="/guide/parent-context">
          <i class="fas fa-arrow-left"></i>
          Parent Context
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/guide/computed">
          Computed
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
    template: \`<div @click="logUser(userName)">Hello {{ userName }}!<\/div>\`,
  }),
  methods: {
    logUser(userName) {
      console.log(\`Users name is: \${userName}\`)
    }
  }
}
<\/script>
`

export default {
  name: 'Methods',

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
