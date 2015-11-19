import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';

gulp.task('build:js', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if(err) console.log('webpack error!', err);
    if(stats) console.log(stats.toString());
    if(callback) callback();
  });
});

gulp.task('default', ['build:js'], () => { console.log('running defaults'); });
gulp.watch('./src/**/*', ['build:js']);