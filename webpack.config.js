const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev
const isBundleAnalyzer = process.env.NODE_ENV === 'bundle_analyzer'
const fileName = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`
const cssLoaders = (loader) => {
	const loaders = [{
		loader: MiniCssExtractPlugin.loader,
	},
	{
		loader: 'css-loader',
		options: {
		},
	}]
	if (loader){
		loaders.push(loader)
	}
	return loaders
}
const plugins = () => {
	const basePlugins = [
		new HtmlWebpackPlugin(
			{
				template: './index.html',
				minify: {
					collapseWhitespace: isProd
				}
			}
		),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/images/'),
					to: path.resolve(__dirname, 'dist/assets/'),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: fileName('css'),
		}),
	]
	if (isBundleAnalyzer) {
		basePlugins.push(new BundleAnalyzerPlugin())
	}
	if (isDev) {
		basePlugins.push(new ESLintPlugin())
	}
	return basePlugins
}
const babelLoaders = (preset) => {
	const loaders = {
		loader: "babel-loader",
		options: {
			cacheDirectory: true,
			presets: [
				'@babel/preset-env',
			],
		}
	}
	if (preset) {
		loaders.options.presets.push(preset)
	}
	return loaders
}
const optimization = () => {
	const config = {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: "all"
		},
	}
	if (isProd) {
		config.minimize = true
		config.minimizer = [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				extractComments: false,
			}),
		]
	}
	return config
}
module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	devtool: isDev ? 'source-map' : false,
	target: isDev ? "web" : "browserslist",
	entry: {
		bundle: './index.js',
	},
	output: {
		filename: fileName('js'),
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.tsx', '.ts', '.xml', '.csv', '.png', '.less', '.css'],
		alias: {
			'@styles': path.resolve(__dirname, 'src/styles'),
			'@': path.resolve(__dirname, 'src')
		},
	},
	devServer: {
		historyApiFallback: true,
		port: 3001,
		hot: true,
		allowedHosts: ['all'],
	},
	optimization: optimization(),
	plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.css$/,
				use: cssLoaders(),
			},
			{
				test: /\.less$/,
				use: cssLoaders('less-loader')
			},
			{
				test: /\.s[ac]ss$/,
				use: cssLoaders('sass-loader')
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
				type: 'asset/resource'
			},
			{
				test: /\.(xml)$/,
				use: ['xml-loader']
			},
			{
				test: /\.(csv)$/,
				use: ['csv-loader']
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: babelLoaders()
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: babelLoaders('@babel/preset-react')
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],
	},
}