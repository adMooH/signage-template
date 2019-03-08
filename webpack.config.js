const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/app.js',
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
		filename: 'template.js',
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
		hot: true
	}
};