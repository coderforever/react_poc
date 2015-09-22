var webpack = require('webpack');

module.exports = {
    entry: {
        VenderOrderListApp: './js/VenderOrderListApp.js',
        VenderOrderDetailApp: './js/VenderOrderDetailApp.js',
        CustomerOrderListApp: './js/CustomerOrderListApp.js',
        CustomerOrderDetailApp: './js/CustomerOrderDetailApp.js',
        CustomerEntranceApp: './js/CustomerEntranceApp.js',
        NewOrderApp: './js/NewOrderApp.js',
        CustomerLoginApp: './js/CustomerLoginApp.js',
        VenderLoginApp: './js/VenderLoginApp.js',
        RegisterApp: './js/RegisterApp.js',
        SystemAdminManageVenderApp: './js/SystemAdminManageVenderApp.js',
        SystemAdminManageServiceApp: './js/SystemAdminManageServiceApp.js',
    },
    output: {
        path: __dirname + '/bundles/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
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
//        new webpack.optimize.UglifyJsPlugin({
//            compress: {
//                warnings: false
//            }
//        })
    ]
}
