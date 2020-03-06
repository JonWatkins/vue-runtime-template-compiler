'use strict'

import RuntimeTemplateCompiler from './components/RuntimeTemplateCompiler.vue'
import config, { setOptions, setVueInstance } from './utils/config'
import { merge } from './utils/helpers'
import { use, registerComponent } from './utils/plugins'

const VueRuntimeTemplateCompiler = {
  install(Vue, options = {}) {
    setVueInstance(Vue)
    setOptions(merge(config, options, true))
    registerComponent(Vue, RuntimeTemplateCompiler)
  }
}

use(VueRuntimeTemplateCompiler)

export default VueRuntimeTemplateCompiler
export { RuntimeTemplateCompiler }
