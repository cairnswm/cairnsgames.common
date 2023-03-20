const deps = require('./package.json').dependencies

// For a module
module.exports = {
  name: 'template',
  filename: 'template.js',
  exposes: {
    './components': './src/components/exports.js',
    './provider': './src/provider/exports.js',
    './hooks': './src/hooks/exports.js'
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
