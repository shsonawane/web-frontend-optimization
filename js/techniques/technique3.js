var compressor = require('node-minify');
 
 
// Using UglifyJS with wildcards
compressor.minify({
  compressor: 'uglifyjs',
  input: './pages/Google.js',
  output: 'bar.js',
  callback: function(err, min) {
	  console.log(min);
  }
});