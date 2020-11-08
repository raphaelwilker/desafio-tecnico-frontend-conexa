const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Uglify            = require('uglify-es');
// const VueLoaderPlugin   = require('vue-loader/lib/plugin');

let packPlugins = {};
packPlugins['Vue'] = 'vue';
packPlugins['VueResource'] = 'vue-resource';

let aliasPlugin = {};
aliasPlugin['vue'] = 'vue/dist/vue.min.js';
aliasPlugin['vue-resource'] = 'vue-resource/dist/vue-resource.min.js';

module.exports = {

    entry : {
        index : './src/index'
    },

    output : {

        path : path.join(__dirname, './dist/js'),
        filename : '[name].min.js'

    },

    module : {
        loaders : [
            {
                test : [/\.scss$/,/\.sass$/],
                loaders : ExtractTextPlugin.extract({
                    fallback : 'style',
                    use : [
                        { loader : 'css', options : { sourceMap : true }},
                        { loader : 'postcss', options : { sourceMap : 'inline' }},
                        { loader : 'sass', options : { sourceMap : true }},
                    ]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader : 'file?name=./../dist/css/fonts/[name].[ext]'
            },
            {
                test: /\.css$/i,
                use: [
                    { loader : 'style-loader'},
                    { loader : 'css-loader'}
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },

    plugins: [
        new Uglify(),
        new ExtractTextPlugin('./../css/[name].min.css'),
        // new VueLoaderPlugin(),
        new webpack.ProvidePlugin(packPlugins)
    ],

    resolveLoader : {
        moduleExtensions : ['-loader'],
        modules: ['node_modules']
    },

    resolve : {
        modules : [
            path.resolve(__dirname,'node_modules')
        ],
        alias: aliasPlugin
    }
}
