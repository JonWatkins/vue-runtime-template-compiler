<template>
  <header
    class="navbar navbar-expand navbar-light flex-column flex-md-row navbar sticky-top"
  >
    <router-link to="/" class="navbar-brand ml-1 mr-0 mr-md-2">
      VueRuntimeTemplateCompiler
    </router-link>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item mt-1">
        <router-link to="/guide/getting-started">
          Guide
        </router-link>
      </li>
      <li class="nav-item  mt-1 ml-3">
        <router-link to="/api-reference">
          API Reference
        </router-link>
      </li>
      <li class="nav-item  mt-1 ml-3">
        <router-link to="/sandbox">
          Sandbox
        </router-link>
      </li>
      <li class="nav-item  mt-1 ml-3">
        <a
          href="https://github.com/JonWatkins/vue-runtime-template-compiler/releases"
          target="_blank"
          class="external"
          rel="nofollow"
        >
          Release Notes<i class="fas fa-external-link-alt" />
        </a>
      </li>
      <li class="nav-item ml-3">
        <a
          href="https://github.com/jonwatkins/vue-runtime-template-compiler"
          target="_blank"
          class="border-bottom-0 icon-hover"
          rel="nofollow"
          alt="GitHub"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </li>
      <li class="nav-item text-muted ml-3">
        <a
          href="https://www.npmjs.com/package/vue-runtime-template-compiler"
          target="_blank"
          class="border-bottom-0 icon-hover"
          rel="nofollow"
          alt="NPM"
        >
          <i class="fab fa-npm fa-2x"></i>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import { version } from '../../../package.json'

export default {
  name: 'Header',

  data() {
    return {
      version
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.navbar {
  background: white;
  border-bottom: 1px solid #eaecef;

  .navbar-nav {
    a {
      color: #2c3e50;
      border-bottom: 2px solid transparent;
      transition: border 0.25s linear;
      padding-bottom: 3px;

      &.active,
      &:hover {
        border-color: #3eaf7c;
      }
    }
  }
}
</style>
