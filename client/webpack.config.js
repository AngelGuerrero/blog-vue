import path from 'path'

module.exports = {
  module: {
    entry: {
      app: './scr/main.js',

      'styles': [
        './scr/assets/css/animate.css'
      ]
    },
    rules: [{
      test: /\.(sass|scss)$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'node_modules')]
          }
        }
      ]
    },
    {
      test: /\.pug$/,
      loader: 'pug-plain-loader'
    }
    ]
  }
}
