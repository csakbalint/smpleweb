module.exports = {
  entry: './examples/1-basic-example/entry.js',
  target: 'web',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: ['node_modules'],
  },
};
