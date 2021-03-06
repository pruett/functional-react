var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var StyleLintPlugin = require('stylelint-webpack-plugin')

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
    , publicPath: '/static/'
    }
  , module:
    { preloaders:
      [
        { test: /\.css$/, loader: 'stylelint' }
      ]
    , loaders:
      [
        { test: /\.jsx?$/
        , loader: 'babel'
        , exclude: [/node_modules/]
        }
      ,
        { test: /\.css$/
        , loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader')
        , exclude: [/node_modules/]
        }
      ,
        { test: /\.elm$/
        , loader: 'elm-webpack'
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
  , plugins:
    [ new ExtractTextPlugin('style.css')
    , new StyleLintPlugin(
        { configFile: '.stylelintrc'
        , files: '**/*.css'
        }
      )
    ]
  , postcss:
    [ require('precss')
    , require('autoprefixer')
    ]
  }
