<template>
  <div class="page">
    <h1 id="top" class="display-4 mb-3">
      <router-link to="/guide/filters#top" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Filters
      </router-link>
    </h1>

    <p>
      Just like the <code>provide</code> the <code>filters</code> are available
      in the <code>vue-runtime-template-compiler</code>. The same as the other
      parent property you use them as if you are writing bindings in the
      parent's compiled template.
    </p>

    <pre class="language-html mb-4"><code>{{ example | trim }}</code></pre>

    <PageNav>
      <template v-slot:left>
        <router-link to="/guide/provide">
          <i class="fas fa-arrow-left"></i>
          Provide
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/api-reference">
          API Reference
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
import moment from 'moment'

export default {
  components: {
    RuntimeTemplateCompiler
  },
  filters: {
    formatDate(date, mask) {
      return moment(date).format(mask)
    }
  },
  data: () => ({
    template: \`
      <div>
        Hi I'm {{user.name}}, my birthday is {{ user.birthday | formatDate('DD/MM/YYY') }}!
      <\/div>
    \`,
    user: {
      name: "Bob",
      birthday: new Date(1986,10,30)
    }
  })
}
<\/script>
`

export default {
  name: 'Filters',

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
