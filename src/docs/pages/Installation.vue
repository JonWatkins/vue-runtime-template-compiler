<template>
  <div class="page">
    <h1 id="install" class="mb-3">
      <router-link to="/installation#install" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Installation
      </router-link>
    </h1>
    <h2 id="direct" class="mb-4 text-muted">
      <router-link to="/installation#direct" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Direct Download / CDN
      </router-link>
    </h2>

    <p>
      <a :href="bundle" target="_blank" class="external">
        {{ bundle }}
        <i class="fas fa-external-link-alt"></i>
      </a>
    </p>

    <p>
      <a href="https://unpkg.com/" target="_blank" class="external"
        >Unpkg.com<i class="fas fa-external-link-alt"></i
      ></a>
      provides npm-based CDN links. The above link will always point to the
      latest release on npm. You can also use a specific version/tag via URLs
      like <code>{{ bundlev1 }}</code
      >.
    </p>

    <p>
      Include <code>Vue Runtime Template Compiler</code> after
      <a
        href="https://vuejs.org/"
        target="_blank"
        rel="nofollow"
        class="external"
        >Vue.js<i class="fas fa-external-link-alt"></i
      ></a>
      and it will install itself automatically:
    </p>

    <pre class="language-js mb-4"><code>{{ cdn | trim }}</code></pre>

    <h2 id="npm" class="mb-4 text-muted">
      <router-link to="/installation#npm" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        NPM
      </router-link>
    </h2>
    <pre class="language-bash mb-4"><code>{{ npm | trim }}</code></pre>

    <h2 id="yarn" class="mb-4 text-muted">
      <router-link to="/installation#yarn" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Yarn
      </router-link>
    </h2>
    <pre class="language-bash mb-4"><code>{{ yarn | trim }}</code></pre>

    <p>
      When used with a module system, you must explicitly install the compiler
      via <code>Vue.use()</code>:
    </p>

    <pre
      class="language-js mb-4"
    ><code>{{ script | toString('\n')}}</code></pre>

    <p>You don't need to do this when using global script tags.</p>

    <PageNav>
      <template v-slot:left>
        <router-link to="/">
          <i class="fas fa-arrow-left"></i>
          Introduction
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/guide/getting-started">
          Getting Started
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </template>
    </PageNav>
  </div>
</template>

<script>
import PageNav from '../components/PageNav.vue'

const vue = 'https://unpkg.com/vue@2.6.11/dist/vue.js'

const bundle =
  'https://unpkg.com/vue-runtime-template-compiler/dist/vue-runtime-template-compiler.umd.js'
const bundlev1 =
  'https://unpkg.com/vue-runtime-template-compiler@1.1.0/dist/vue-runtime-template-compiler.umd.js'

export default {
  name: 'Installation',

  components: {
    PageNav
  },

  data() {
    return {
      vue,
      bundle,
      bundlev1,
      npm: '$ npm i vue-runtime-template-compiler',
      yarn: '$ yarn add vue-runtime-template-compiler',
      cdn: `<script src="${vue}"><\/script>\n<script src="${bundle}"><\/script>`,
      script: [
        'import Vue from "vue"',
        'import RuntimeTemplateCompiler from "vue-runtime-template-compiler"',
        'Vue.use(RuntimeTemplateCompiler)'
      ]
    }
  }
}
</script>
