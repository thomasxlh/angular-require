var path = require('path');

module.exports = {
    entry: './src/app/main.js',
    output: {
        path: './src/ptp-metals/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.less/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' },
            { test: /\.css/, loader: 'css-loader' },
            { test: /\.html$/, loader: 'html-loader' }
        ]
    },
    bable: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    devtool: 'source-map'
};