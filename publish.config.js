var webpack = require('webpack');

module.exports = {
	entry: {
        VenderOrderApp: './js/VenderOrderApp.js',
        CustomerOrderApp: './js/CustomerOrderApp.js',
        CustomerLoginApp: './js/CustomerLoginApp.js',
        VenderLoginApp: './js/VenderLoginApp.js',
        RegisterApp: './js/RegisterApp.js'
	},
	output: {
		path: __dirname + '/bundles/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module:{
	    loaders: [
	        {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony',
                exclude: /node_modules/
            }
        ]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}
