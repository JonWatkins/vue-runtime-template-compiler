<template>
  <div class="page">
    <h1 id="top" class="mb-3">
      <router-link to="/guide/props#top" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Props
      </router-link>
    </h1>

    <p>
      Just like the <code>computed</code> the <code>props</code> properties are
      available in the <code>runtime-template-compiler</code>. The same as the
      other parent property you use them as if you are writing bindings in the
      parent's compiled template.
    </p>

    <pre class="language-html mb-4"><code>{{ example | trim }}</code></pre>

    <PageNav>
      <template v-slot:left>
        <router-link to="/guide/computed">
          <i class="fas fa-arrow-left"></i>
          Computed
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/guide/provide">
          Provide
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
  props: {
    firstName: {
      type: String,
      default: 'Bob'
    },
    lastName: {
      type: String,
      default: 'Example'
    }
  }
  data: () => ({
    template: \`<div>{{ greeting }}!<\/div>\`,
  }),
  computed: {
    fullName() {
      return \`\${this.firstName} \${this.lastName}\`
    }
  }
}
<\/script>
`

export default {
  name: 'Props',

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
