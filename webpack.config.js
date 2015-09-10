var webpack = require('webpack');

module.exports = {
	entry: {
        CustomerOrderApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/CustomerOrderApp.js'
        ],
        VenderOrderApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/VenderOrderApp.js'
        ],
        CustomerLoginApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/CustomerLoginApp.js'
        ],
        VenderLoginApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/VenderLoginApp.js'
        ],
        RegisterApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/RegisterApp.js'
        ],
        NewOrderApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/NewOrderApp.js'
        ]
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
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
