const webpack = require('webpack');
// load custom or default webpack config
const webpackConfig = require('./webpack.config');
// call the compiler
const compiler = webpack(webpackConfig);
console.log(__dirname)
compiler.run((err, stats) => {
  if (err) console.log(err);
  else console.log(stats);
});
// get back the result

// check if the <config.domainname> S3 bucket exists

// if not create it