module.exports = {
  entry: {
    main: './lib/index.js',
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!resolve-url!sass?sourceMap' },
      { test: /\.png$/, loader: 'url-loader', query: { mimetype: 'image/png'} },
      { test: /\.jpg$/, loader: 'url-loader', query: { mimetype: 'image/jpg'} },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};
