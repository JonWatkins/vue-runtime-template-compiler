# Runtime Template Compiler

### A [Vue.js](https://vuejs.org/) component for easy compiling and interpreting of HTML templates at runtime.

![npm](https://img.shields.io/npm/v/vue-runtime-template-compiler)
![NPM](https://img.shields.io/npm/l/vue-runtime-template-compiler)
![npm](https://img.shields.io/npm/dt/vue-runtime-template-compiler)
![Travis (.org)](https://img.shields.io/travis/JonWatkins/vue-runtime-template-compiler)
![Coveralls github](https://img.shields.io/coveralls/github/JonWatkins/vue-runtime-template-compiler)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/JonWatkins/vue-runtime-template-compiler)

> An interactive demo of the compiler can be found over at [CodeSandbox](https://codesandbox.io/embed/vue-runtime-template-compiler-51rld)

This is a simple library that makes use of the `vue-template-compiler` to generate a component on the fly from a HTML string, which solves the template binding issues that you get with the `v-html` directive.

The `Vue Runtime Template Compiler` makes it easy to get a template string either from a local variable or from a remote source, and then compile and render it as a component using scope of the parent.

You do not need to use the use the `with-compiler` version of [Vue.js](https://vuejs.org/), as this bundles the `vue-template-compiler`. This is handy as you might not want to use the runtime compiler in the whole application. Using [Webpack](https://webpack.js.org/) and code splitting you can ensure that the compiler is only fetched when necessary.

Keep in mind that the template can only access the instance properties of the component that is using it.

## Installation

### Direct Download / CDN

```bash
https://unpkg.com/vue-runtime-template-compiler/dist/vue-runtime-template-compiler.umd.js
```

[Unpkg.com](https://unpkg.com/) provides npm-based CDN links. The above link will always point to the latest release on npm. You can also use a specific version/tag via URLs like `https://unpkg.com/vue-runtime-template-compiler@1.1.0/dist/vue-runtime-template-compiler.umd.js`.

Include `Vue Runtime Template Compiler` after [Vue.js](https://vuejs.org/) and it will install itself automatically:

```html
<script src="https://unpkg.com/vue@2.6.11/dist/vue.js"></script>
<script src="https://unpkg.com/vue-runtime-template-compiler/dist/vue-runtime-template-compiler.umd.js"></script>
```

### NPM

```bash
$ npm i vue-runtime-template-compiler
```

## Yarn

```yarn
$ yarn add vue-runtime-template-compiler
```

When used with a module system, you must explicitly install the compiler via `Vue.use()`:

```javascript
import Vue from "vue"
import RuntimeTemplateCompiler from "vue-runtime-template-compiler"
Vue.use(RuntimeTemplateCompiler)
```

## Getting Started

To use the `Vue Runtime Template Compiler` plugin you just need to import the `runtime-template-compiler` component and pass in the template that you want to use. You may either use it as a plugin, or you can use the component directly. Either way you decide to install it the usage of the component will be the same.

Note: When using [Webpack](https://webpack.js.org/) you can use code splitting so that you do not load the runtime compiler in to your whole application.

### Using the plugin

If you have installed the plugin using the `Vue.use()` method then you can use the component like this:

```html
<template>
  <runtime-template-compiler :template="template" />
</template>
<script>
  export default {
    data() {
      return {
        message: 'Hello from the template compiler',
        template: `
          <h1>{{ message }}</h1>
        `
      }
    }
  }
</script>
```

### Using the component

Or if you choose to you can load the component directly.

```html
<template>
  <runtime-template-compiler :template="template" />
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
        template: `
          <h1>{{ message }}</h1>
        `
      }
    }
  }
</script>
```

### Parent Context

The template you pass has access to the parent component scope. You can access computed properties and methods as well from the template.

However if you have wrapped the `runtime-template-compiler` in another component it may be necessary to set the parent property on the compiler component, else you might end up with the wrong scope being bound.

```html
<template>
  <wrapper-component>
    <runtime-template-compiler :template="template" :parent="parentComponent" />
  </wrapper-component>
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
    template: `<div>Hello {{ userName }}!</div>`,
  })
}
</script>
```

### Methods

As with the `data` object the `methods` are also available in the `runtime-template-compiler`. You just use them as if you are writing bindings in the parent's compiled template.

Note: These will behave as if they have been called from within the parent component.

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
  data: () => ({
    userName: 'Bob',
    template: `<div @click="logUser(userName)">Hello {{ userName }}!</div>`,
  }),
  methods: {
    logUser(userName) {
      console.log(`Users name is: ${userName}`)
    }
  }
}
</script>
```

### Computed

Just like the `methods` the `computed` properties are available in the `runtime-template-compiler`. The same as the other parent property you use them as if you are writing bindings in the parent's compiled template.

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
  data: () => ({
    userName: 'Bob',
    template: `<div>{{ greeting }}!</div>`,
  }),
  computed: {
    greeting() {
      return `Hello my name is ${this.userName}`
    }
  }
}
</script>
```

### Props

Just like the `computed` the `props` properties are available in the `runtime-template-compiler`. The same as the other parent property you use them as if you are writing bindings in the parent's compiled template.

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
    template: `<div>{{ greeting }}!</div>`,
  }),
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}
</script>
```

### Filters

Just like the `props` the `filters` are available in the `runtime-template-compiler`. The same as the other parent property you use them as if you are writing bindings in the parent's compiled template.

```html
<template>
  <runtime-template-compiler :template="template" />
</template>

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
    template: `
      <div>
        Hi I'm {{user.name}}, my birthday is {{ user.birthday | formatDate('DD/MM/YYY') }}!
      </div>
    `,
    user: {
      name: "Bob",
      birthday: new Date(1986,10,30)
    }
  })
}
</script>
```

### Filters

Just like the `props` the `provide` properties are available in the `runtime-template-compiler`. The same as the other parent property you use them as if you are writing bindings in the parent's compiled template.

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
  provide: {
    name: 'Bob'
  }
  data: () => ({
    template: `<div>{{ name }}!</div>`,
  })
}
</script>
```

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## Documentation

To check out [live examples](https://jonwatkins.github.io/vue-runtime-template-compiler/sandbox) and docs, visit [https://jonwatkins.github.io/vue-runtime-template-compiler/](https://jonwatkins.github.io/vue-runtime-template-compiler/)

## Browser Compatibility

[Vue.js](https://vuejs.org/) supports all browsers that are [ES5-compliant](http://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/JonWatkins/vue-runtime-template-compiler/releases).

## License

[MIT](https://github.com/JonWatkins/vue-runtime-template-compiler/blob/master/LICENCE)

Copyright (c) 2020-present Jon Watkins
