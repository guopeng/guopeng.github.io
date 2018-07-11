let mix = require('laravel-mix');


mix
    .options({
        fileLoaderDirs: {
            fonts: 'dist/fonts'
        }
    })
    .sass('src/sass/bundle.scss', 'dist/css/bundle.css')
    .js('src/js/bundle.js', 'dist/js/bundle.js');
