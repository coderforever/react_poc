var webpack = require('webpack');

module.exports = {
	entry: {
        CustomerOrderListApp: './js/CustomerOrderListApp.js',
        VenderOrderListApp: './js/VenderOrderListApp.js',
        CustomerOrderDetailApp: './js/CustomerOrderDetailApp.js',
        VenderOrderDetailApp: './js/VenderOrderDetailApp.js',
        NewOrderApp: './js/NewOrderApp.js',
        CustomerLoginApp: './js/CustomerLoginApp.js',
        VenderLoginApp: './js/VenderLoginApp.js',
        RegisterApp: './js/RegisterApp.js'
	},
	output: {
	    publicPath: 'http://127.0.0.1:3000/bundles/',
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
                loader: 'react-hot!babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'react-hot!babel-loader!jsx-loader?harmony',
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
