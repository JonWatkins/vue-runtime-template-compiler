<template>
  <div class="page">
    <h1 id="started" class="mb-3">
      <router-link to="/guide/getting-started#started" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Getting Started
      </router-link>
    </h1>
    <div class="alert alert-primary mb-4">
      When using
      <a
        href="https://webpack.js.org/"
        target="_blank"
        rel="nofollow"
        class="external"
        >Webpack<i class="fas fa-external-link-alt"></i
      ></a>
      you can use code splitting so that you do not load the runtime compiler in
      to your whole application.
    </div>
    <p>
      To use the <code>Vue Runtime Template Compiler</code> plugin you just need
      to import the <code>vue-runtime-template-compiler</code> component and
      pass in the template that you want to use. You may either use it as a
      plugin, or you can use the component directly. Either way you decide to
      install it the usage of the component will be the same.
    </p>
    <h2 id="plugin" class="mb-4">
      <router-link to="/guide/getting-started#plugin" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Using the plugin
      </router-link>
    </h2>
    <p>
      If you have installed the plugin using the <code>Vue.use()</code> method
      then you can use the component like this:
    </p>
    <pre class="language-html mb-4"><code>{{ example1 | trim }}</code></pre>
    <h2 id="component" class="mb-4">
      <router-link to="/guide/getting-started#component" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Using the component
      </router-link>
    </h2>
    <p>
      Or if you choose to you can load the component directly. From this point
      on we will assume you have installed the component with the
      <code>Vue.use()</code> method.
    </p>
    <pre class="language-html mb-4"><code>{{ example2 | trim }}</code></pre>

    <PageNav>
      <template v-slot:left>
        <router-link to="/installation">
          <i class="fas fa-arrow-left"></i>
          Installation
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/guide/parent-context">
          Parent Context
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </template>
    </PageNav>
  </div>
</template>

<script>
import PageNav from '../components/PageNav.vue'

const example1 = `
<template>
  <runtime-template-compiler :template="template" />
</template>
<script>
  export default {
    data() {
      return {
        message: 'Hello from the template compiler',
        template: \`
          <h1>{{ message }}</h1>
        \`
      }
    }
  }
<\/script>
`

const example2 = `
<template>
  <RuntimeTemplateCompiler :template="template" />
</template>
<script>
  import { RuntimeTemplateCompiler } from "vue-runtime-template-compiler"

  export default {
    components: {
      RuntimeTemplateCompiler
    },
    data() {
      return {
        message: 'Hello from the template compiler',
        template: \`
          <h1>{{ message }}</h1>
        \`
      }
    }
  }
<\/script>
`

export default {
  name: 'GettingStarted',

  components: {
    PageNav
  },

  data() {
    return {
      example1,
      example2
    }
  }
}
</script>
