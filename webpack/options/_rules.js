import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../../config'

const isProduction = config.env === 'production';

// ------------------------------------
// Rules
// ------------------------------------

let sassLoaders = isProduction
  ? ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        minimize: true,
        sourceMap: true
      }
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: () => [
          autoprefixer({
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          })
        ]
      },
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }]
  })
  : [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        autoprefixer({
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        })
      ]
    },
  }, {
    loader: 'sass-loader',
    options: {
      includePaths: [`${config.path_client}/styles`]
    }
  }];

let cssLoaders = isProduction
  ? ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  'last 2 versions',
                  'Firefox ESR',
                  'not ie < 9', // React doesn't support IE8 anyway
                ],
                flexbox: 'no-2009',
              })
            ]
          },
        }
      ]
    }
      // extractTextPluginOptions
  )
  : [{
    loader: 'style-loader'
  }, {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  }, {
    loader: 'postcss-loader',
    options: {
      plugins: () => [
        autoprefixer({
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        })
      ]
    },
  }];

export let rules = [
  //preLoader
  {
    test: /\.js$/,
    enforce: 'pre',
    use: [
      {
        loader: 'eslint-loader',
        options: {
          // configFile: `${config.path_base}/.eslintrc`,
          emitWarning: !isProduction
        }
      }
    ],
    exclude: /node_modules/,
  },

  // ES-2015
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: ['transform-runtime'],
      presets: !isProduction
        ? ['babel-preset-env', 'react', 'stage-0', 'react-hmre']
        : ['babel-preset-env', 'react', 'stage-0']
    }
  },
  // Styles
  {
    test: /\.scss$/,
    include: /app/,
    use: sassLoaders
  },
  {
    test: /\.css$/,
    exclude: /app/,
    use: cssLoaders
  },
  // Fonts
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }
  },
  // Images
  {
    test: /\.(png|jpg|gif|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]'
      }
    }
  }
];

// export let postcss = [
//   cssnano({
//     sourcemap: true,
//     autoprefixer: {
//       add: true,
//       remove: true,
//       browsers: ['last 2 versions']
//     },
//     safe: true,
//     discardComments: {
//       removeAll: true
//     }
//   })
// ];
