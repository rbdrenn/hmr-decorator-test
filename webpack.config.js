const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	devtool: 'source-map',
	devServer: {
		contentBase: `${__dirname}/dist`,
		compress: true,
		port: 9000,
		stats: 'errors-only',
		hot: true,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `${__dirname}/src/public/index.html`,
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
}
