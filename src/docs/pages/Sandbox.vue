<template>
  <div class="page">
    <h1 id="top" class="display-4 mb-3">
      <router-link to="/sandbox#top" class="header-anchor">
        <span class="header-anchor--hash">#</span>
        Sandbox
      </router-link>
    </h1>

    <div class="alert alert-primary mb-4">Coming soon...</div>

    <PageNav>
      <template v-slot:left>
        <router-link to="/api-reference">
          <i class="fas fa-arrow-left"></i>
          API Reference
        </router-link>
      </template>
      <template v-slot:right>
        <router-link to="/">
          Introduction
          <i class="fas fa-arrow-right"></i>
        </router-link>
      </template>
    </PageNav>
  </div>
</template>

<script>
import PageNav from '../components/PageNav.vue'

export default {
  name: 'Sandbox',

  components: {
    PageNav
  }
}
</script>
