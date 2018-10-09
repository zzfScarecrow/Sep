const tsImportPluginFactory = require('ts-import-plugin')
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    options: {
      getCustomTransformers: () => ({
        before: [
          tsImportPluginFactory({
            libraryDirectory: 'es',
            libraryName: 'antd',
            style: 'css'
          })
        ]
      })
    }
  })
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'less-loader'
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
