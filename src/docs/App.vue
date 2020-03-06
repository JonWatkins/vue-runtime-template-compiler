<template>
  <div class="docs">
    <Header />
    <Container>
      <Sidebar />
      <Content />
    </Container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',

  components: {
    Header,
    Container,
    Sidebar,
    Content
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
body {
  font-family: 'Roboto', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto Slab', serif;
}

h1,
h2,
h3 {
  display: block;
  position: relative;
  .header-anchor {
    color: #2c3e50;
    cursor: pointer;

    &:hover {
      color: #2c3e50;
    }

    &--hash {
      transition: visibility 0s, opacity 0.25s linear;
      position: absolute;
      top: 0;
      visibility: hidden;
      opacity: 0;
      padding-right: 30px;
      color: #3eaf7c;
    }
  }

  &:hover {
    .header-anchor {
      &--hash {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}

h1 {
  .header-anchor {
    &--hash {
      left: -35px;
    }
  }
}

h2 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 5px;
  .header-anchor {
    color: #6c757d !important;
    &--hash {
      left: -25px;
    }
  }
}

h3 {
  .header-anchor {
    color: #6c757d !important;
    &--hash {
      left: -20px;
    }
  }
}

a {
  transition: color 0.25s linear;
  i {
    transition: color 0.25s linear;
  }
}

a,
a:hover {
  text-decoration: none !important;
  color: #3eaf7c;
  i {
    color: #2c3e50;
  }
}

.icon-hover:hover {
  i {
    color: #3eaf7c;
  }
}

.external {
  position: relative;
  padding-right: 15px;

  i {
    color: #aaa;
    font-size: 10px;
    position: absolute;
    right: 2px;
    top: 0px;
  }
}

.alert {
  a {
    color: #2c3e50;
  }
}

.text-tiny {
  font-size: 60%;
}

code {
  color: #3eaf7c !important;
  color: #476582;
  padding: 0.25rem 0.5rem;
  margin: 0;
  font-size: 0.8em !important;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;

  &.language-js {
    padding: 0;
  }
}

code[class*='language-'],
pre[class*='language-'] {
  background-color: #282c34;
  text-shadow: none;
  border-radius: 6px;
  color: #ccc !important;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background: transparent;
}

.token.boolean,
.token.function,
.token.number {
  color: #f08d49;
}

.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
  color: #cc99cd;
}

.token.attr-value,
.token.char,
.token.regex,
.token.string,
.token.variable {
  color: #7ec699;
}

.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag,
.token.operator {
  color: #e2777a;
}
</style>
