var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/ReactWebbyclickTemplatePreview.js',
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'ReactWebbyclickTemplatePreview.js',
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /(node_modules)/,
            }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom'),
        }
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "react-router-dom": {
            commonjs: "react-router-dom",
            commonjs2: "react-router-dom",
            amd: "ReactRouterDOM",
            root: "ReactRouterDOM"
        },
    }
}