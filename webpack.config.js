const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
	const mode = env.NODE_ENV
	const config = {
		mode: mode || 'development'
	}

	const template = argv.t;

	if (template === undefined || template === null || template === "") {
		console.error("ERROR:No template was specified.");
		process.exit(1);
	}

	if (config.mode === 'development') {
		// User is debugging a template
		process.env.REACT_APP_TEMPLATE = template;
		config.entry = './app.js';
		config.out = 'template.debug.js';
	} else {
		// User is exporting a template
		const templateName = template.split('/')[2];
		config.entry = template;
		config.out = `template.${templateName}.js`;
	}

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
			]),
			new webpack.EnvironmentPlugin({
				ADMOOH_TEMPLATE: template,
			})
		],
		devServer: {
			contentBase: './build',
			hot: true,
		}
	}
}