var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports =
  { devtool: 'cheap-module-eval-source-map'
  , devServer: { contentBase: 'src/' }
  , entry:
    [ 'webpack-dev-server/client?http://localhost:8080'
    , path.join(__dirname, 'src/index.js')
    ]
  , output:
    { path: path.resolve(__dirname, 'build')
    , filename: 'bundle.js'
    }
  , module:
    { loaders:
      [
        { test:    /\.jsx?$/
        , loader:  'babel'
        , exclude: [/node_modules/]
        }
      ,
        { test:    /\.css$/
        , loaders:  ['style', 'css', 'postcss']
        , exclude: [/node_modules/]
        }
      ,
        { test:    /\.elm$/
        , loader:  'elm-webpack'
        , exclude: [/elm-stuff/, /node_modules/]
        }
      ]
      , noParse: /\.elm$/
    }
  , resolve:
    { modules:
      [ path.resolve('./src')
      , 'node_modules'
      ]
    , extensions: ['', '.js', '.jsx', '.elm']
    }
  , postcss:
    [ autoprefixer(
        { browsers: ['last 2 versions'] }
      )
    ]
  }
