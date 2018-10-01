var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'scripts', 'main.js'),
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { 
                        loader: 'css-loader',
                        options: {
                            import: true
                        } 
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/res/*', to: './res/', flatten: true },
            { from: './src/styles/*', flatten: true }
        ])
    ]
};
