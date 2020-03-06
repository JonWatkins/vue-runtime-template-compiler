<template>
  <div class="col-md-3 col-xl-3 position-fixed sidebar">
    <nav>
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/">Introduction</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/installation">Installation</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/guide/getting-started">Getting Started</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/guide/parent-context">Parent Context</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/guide/methods">Methods</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/guide/computed">Computed</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/guide/props">Props</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/guide/provide">Provide</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/guide/filters">Filters</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style lang="scss" rel="stylesheet/scss">
.sidebar {
  position: sticky;
  z-index: 1000;
  height: 100vh;
  border-right: 1px solid #eaecef;
  padding: 1.5rem 0;

  a {
    font-weight: 400;
    display: inline-block;
    color: #2c3e50;
    border-left: 0.25rem solid transparent;
    padding: 0.35rem 1rem 0.35rem 1.25rem;
    line-height: 1.4;
    width: 100%;
    box-sizing: border-box;

    &.active-exact,
    &:hover {
      color: #3eaf7c;
    }

    &.active-exact {
      border-left-color: #3eaf7c;
    }
  }
}
</style>
