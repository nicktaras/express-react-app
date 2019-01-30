const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
	// tell webpack the root
	entry: './src/client/index.js',
	// output object tell webpack where to place output
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
};

module.exports = merge(baseConfig, config);
