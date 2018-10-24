const path = require('path');

module.exports = {
	// inform webpack we are building a bundle for nodejs, rather
	// than browser
	target: 'node',
	// tell webpack the root
	entry: './src/index.js',
	// output object tell webpack where to place output
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	// tell webpack to run babel
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', {targets: {browsers: ['last 2 versions' ] }}]
					]
				}	
			}
		]
	}
};
