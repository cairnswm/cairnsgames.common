const deps = require('./package.json').dependencies

// For a module
module.exports = {
  name: 'common',
  filename: 'common.js',
  exposes: {
    './components': './src/tenant/components/exports.js',
    './provider': './src/tenant/provider/exports.js',
    './hooks': './src/tenant/hooks/exports.js'
  },
  shared: {
    ...deps,
    react: { singleton: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
  }
}

// For an application
// module.exports = {
//   name: 'application',
//   remotes: {
//     cairnsgames: process.env.REACT_APP_CAIRNSGAMES_REMOTE,
//     payments: process.env.REACT_APP_CAIRNSGAMES_PAYMENTS
//   },
//   shared: {
//     ...deps,
//     react: { singleton: true, requiredVersion: deps.react },
//     'react-dom': { singleton: true, requiredVersion: deps['react-dom'] }
//   }
// }

// Note a module can also use remotes if it is dependant on other modules
