const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.js$/, use: 'imports-loader?define=>false'},
        ]
    }
};


