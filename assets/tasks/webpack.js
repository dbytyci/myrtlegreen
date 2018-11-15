import path    from 'path'
import webpack from 'webpack'
import process from 'process'

const isProduction = (process.env.NODE_ENV === 'production');

let config = {

    context: path.resolve(__dirname, '../'),

    entry: './js/app/index.js',

    output: {
        path: path.resolve(__dirname, '../js/dist/'),
        publicPath: "/wp-content/themes/myrtlegreen/assets/js/dist/",
        filename: 'bundle.js'
    },

    plugins: isProduction ? [ new webpack.optimize.UglifyJsPlugin() ] : []
};


function scripts() {
    return new Promise(resolve => webpack(config, (err, stats) => {

        if(err) console.log('Webpack', err);

        console.log(stats.toString({ /* stats options */ }));

        resolve()
    }))
}

module.exports = { config, scripts };
