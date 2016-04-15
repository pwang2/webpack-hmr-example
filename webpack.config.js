var webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.bundle.js'
    },
    debug: true,
    devServer: {
        hot: true,
        inline: true,
        progress: true,
        contentBase: '.'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
};
