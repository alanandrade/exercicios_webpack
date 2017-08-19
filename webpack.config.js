const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public', //__dirname() é o diretorio atual
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}