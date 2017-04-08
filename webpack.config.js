const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    plugins: ['transform-runtime']
                }

            }]
        }]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};