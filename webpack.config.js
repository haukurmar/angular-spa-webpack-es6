'use strict';
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var APP = path.join(__dirname + '/src');
// http://webpack.github.io/docs/stylesheets.html
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	context: APP, // set the `app` directory as the context
	entry: {
		app: ['webpack/hot/dev-server', './app/app.js'],
		vendors: ['angular', 'angular-new-router', './app/vendors.js']
	},
	// output is for DEVELOPMENT
	output: {
		path: path.join(__dirname, 'dist/'),
		//publicPath: '/public/',
		filename: '[name].js' // based on the entry point key name
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract(
						'style-loader',
						'css-loader!postcss-loader!less-loader'
				),
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
						'style-loader',
						'css-loader!postcss-loader'
				)
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules|bower_components/
			},
			{
				test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
				loader: 'url-loader?name=res/[name].[ext]?[hash]'
			},
			{
				test: /\.html/,
				loader: 'raw'
			},
			{
				test: /\.json/,
				loader: 'json'
			}
		]
	},
	postcss: function () {
		return {
			defaults: [autoprefixer],
			cleaner:  [autoprefixer({ browsers:["last 15 version"], cascade: true })]
		};
	},
	resolve: {
		root: APP
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			MODE: {
				production: process.env.NODE_ENV === 'production'
			}
		}),
		new ExtractTextPlugin('[name].css')
	],
	// you can now require('file') instead of require('file.js')
	extensions: ['', '.js', '.json', '.html'],
	// `eval` to see the generated code (DEV only) (see Console Sources tab)
	// `eval-source-map` the exact code (DEV only)
	// `source-map` generates source map files (for PRODUCTION)
	devtool: 'eval-source-map'
};

/////////////////////////////////////////////
// PRODUCTION
/////////////////////////////////////////////
if (process.env.NODE_ENV === 'production') {

	// Change destination folder for Production code
	config.output.path = __dirname + '/dist';

	// Uglify JS
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());

	// Generate Source map files
	config.devtool = 'source-map';
}

module.exports = config;
