const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
	const mode = env.NODE_ENV
	const config = {
		mode: mode || 'development'
	}
	config.entry = config.mode === 'development' ? './src/app.js' : './src/admoohTemplate.js';
	config.out = config.mode === 'development' ? 'template.js' : 'template.prod.js';
	console.log(config);
	return {
		entry: config.entry,
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
					use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
				}
			]
		},
		resolve: {
			extensions: ['*', '.js', '.jsx']
		},
		output: {
			path: path.resolve(__dirname + '/build'),
			publicPath: '/',
			filename: config.out,
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new CopyPlugin([
				{
					from: path.resolve(__dirname + '/www/index.html'),
					to: path.resolve(__dirname + '/build'),
					force: true
				}
			])
		],
		devServer: {
			contentBase: './build',
			hot: true,
		}
	}
}