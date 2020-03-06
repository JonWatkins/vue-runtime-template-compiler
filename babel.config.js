module.exports = function babelConfig(api) {
  api.cache(true)
  return {
    presets: [['@babel/preset-env']],
    plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-object-rest-spread',
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true
        }
      ]
    ],
    env: {
      test: {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
      }
    }
  }
}
