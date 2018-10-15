const tsImportPluginFactory = require('ts-import-plugin')
const path = require('path')
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
  config.resolve.alias['@'] = path.resolve(__dirname, '..', 'src/components')
  return config
}
