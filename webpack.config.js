var webpack = require('webpack');

module.exports = {
	entry: {
        CustomerOrderListApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/CustomerOrderListApp.js'
        ],
        CustomerOrderDetailApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/CustomerOrderDetailApp.js'
        ],
        CustomerEntranceApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/CustomerEntranceApp.js'
        ],
        NewOrderApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/NewOrderApp.js'
        ],
        VenderOrderListApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/VenderOrderListApp.js'
        ],
        VenderOrderDetailApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/VenderOrderDetailApp.js'
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
        SystemAdminLoginApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/SystemAdminLoginApp.js'
        ],
        VenderAdminLoginApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/VenderAdminLoginApp.js'
        ],
        SystemAdminManageVenderApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/SystemAdminManageVenderApp.js'
        ],
        SystemAdminManageServiceApp: [
            'webpack-dev-server/client?http://127.0.0.1:3000',
            'webpack/hot/only-dev-server',
            './js/SystemAdminManageServiceApp.js'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
