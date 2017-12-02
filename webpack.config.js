const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    module:{
        loaders:[
            {
                test:/\.js/,
                loader: 'babel-loader',
                exclude:[/node_modules/],
                query:{
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss/,
                use:[{
                        loader: "style-loader"
                    },{
                        loader: "css-loader"
                    },{
                        loader: "sass-loader"
                    }]
            }
        ]
    },
};