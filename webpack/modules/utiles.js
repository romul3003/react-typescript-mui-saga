const WebpackBar = require('webpackbar')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { ProvidePlugin, DefinePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const Dotenv = require('dotenv-webpack')

exports.connectBuildProgressIndicator = () => ({
  plugins: [new WebpackBar()],
})

exports.connectFriendlyErrors = () => ({
  plugins: [new FriendlyErrorsWebpackPlugin()],
})

exports.setHotReload = () => ({
  plugins: [new ReactRefreshWebpackPlugin()],
})

exports.defineEnvVariables = () => {
  const { NODE_ENV } = process.env

  return {
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV), // fix "process is not defined" error
        'process.env.name': JSON.stringify('Roman'),
        __API_URI__: 'https:....',
        __ENV__: JSON.stringify(NODE_ENV),
        __DEV__: NODE_ENV === 'development',
        __STAGE__: NODE_ENV === 'stage',
        __PROD__: NODE_ENV === 'production',
      }),
      new Dotenv(),
    ],
  }
}

exports.provideGlobals = () => ({
  plugins: [
    // fix "process is not defined" error:
    // (uses "process" npm package)
    new ProvidePlugin({
      process: 'process/browser',
    }),
  ],
})

exports.connectBundleAnalyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
})
