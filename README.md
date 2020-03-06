## Getting Started

To install you can use either Yarn or NPM. You do not need to use the version of vue that includes the template compiler bundled, as this uses the `vue-template-compiler` as a dependency.

```bash
yarn add vue-runtime-template-compiler
npm i vue-runtime-template-compiler
```

## Usage

You just need to import the `vue-runtime-template-compiler` component and pass in the template that you want to use. You may either use it as a plugin, or you can use the component directly. Either way you decide to install it the usage of the component will be the same.

Note: If you are using the pre-compiled files loaded into the browser without a bundler you will have to install the plugin using the `default` property e.g. `Vue.use(RuntimeTemplateCompiler.default)`

```javascript
import RuntimeTemplateCompiler from 'vue-runtime-template-compiler'
import Vue from 'vue'
Vue.use(RuntimeTemplateCompiler)
```

```html
<template>
  <runtime-template-compiler :template="template" />
</template>

<script>
import { RuntimeTemplateCompiler } from 'vue-runtime-template-compiler'

export default {
  components: {
    RuntimeTemplateCompiler
  },
  
  data() {
    template: `
      <template v-for="(users, index) in users">
        <a :key="index" @click.prevent="logUser(user)">
          {{ users.name }}
        </a>
      </template>
    `
  },

  methods: {
    logUser(user) {
      console.log(user)
    }
  }
}
</script>
```

The template you pass have access to the parent component instance (You can give a parent property). But you can access computed properties and methods as well from the template:

```html
<template>
  <wrapper-component>
    <runtime-template-compiler :template="template" :parent="parentComponent" />
  <wrapper-component>
</template>

<script>
import { RuntimeTemplateCompiler } from 'vue-runtime-template-compiler'
import WrapperComponent from './WrapperComponent.vue'

export default {
  components: {
    RuntimeTemplateCompiler,
    WrapperComponent
  },
  data: () => ({
    parentComponent: this,
    userName: 'Bob',
    template: `
      <div>
        <div>Hello {{ userName }}!</div>
        <button @click="greet(userName)">Say Hello</button>
        <p>{{ someComputed }}</p>
      </div>
		`,
  }),
  computed: {
    computedValue() {
      return 'This is a computed value.'
    },
  },
  methods: {
    sayHi(name) {
      console.log(`Hello ${name}`)
    }
  }
}
</script>
```
