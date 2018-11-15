import base    from './base'
import path    from 'path'
import gulp    from 'gulp'
import Browser from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

import { config as webpackConfig } from './webpack'

webpackConfig.output.publicPath = "/";

const browser = Browser.create();
const bundler = webpack(webpackConfig);

export function server() {

    let config = {
        proxy: base.proxy,
        open: false,
        middleware: [
            webpackDevMiddleware(bundler, { /* options */ })
        ],
    };

    //console.info(config.server.baseDir);
    browser.init(config);

    gulp.watch('js/**/*.js').on('change', () => browser.reload())
}
