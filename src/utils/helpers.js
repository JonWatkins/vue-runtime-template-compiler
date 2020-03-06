'use strict'

export function isObject(item) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null
}

export function mergeAll(objects, deep = false) {
  let res = {}
  for (const obj of objects) {
    if (isObject(obj)) {
      res = merge(res, obj, deep)
    }
  }
  return res
}

export function merge(target, source, deep = false) {
  if (deep || !Object.assign) {
    const isDeep = (prop) =>
      isObject(source[prop]) &&
      target !== null &&
      Object.prototype.hasOwnProperty.call(target, prop) &&
      isObject(target[prop])

    const replaced = Object.getOwnPropertyNames(source)
      .map((prop) => ({
        [prop]: isDeep(prop)
          ? merge(target[prop], source[prop], deep)
          : source[prop]
      }))
      .reduce((a, b) => ({ ...a, ...b }), {})

    return {
      ...target,
      ...replaced
    }
  } else {
    return Object.assign(target, source)
  }
}
