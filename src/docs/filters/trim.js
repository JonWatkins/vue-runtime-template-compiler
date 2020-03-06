import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

const nw = new Normalizer({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true
})

export default function trim(str) {
  return nw.normalize(str)
}
