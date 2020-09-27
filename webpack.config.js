var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/Preview.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Preview.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}