const {src, dest, parallel, series} = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

function plugins() {
    return src([
        './tinymce/plugins/save/plugin.min.js',
        './tinymce/plugins/searchreplace/plugin.min.js',
        './tinymce/plugins/autolink/plugin.min.js',
        './tinymce/plugins/directionality/plugin.min.js',
        './tinymce/plugins/visualblocks/plugin.min.js',
        './tinymce/plugins/visualchars/plugin.min.js',
        './tinymce/plugins/image/plugin.min.js',
        './tinymce/plugins/link/plugin.min.js',
        './tinymce/plugins/media/plugin.min.js',
        './tinymce/plugins/code/plugin.min.js',
        './tinymce/plugins/codesample/plugin.min.js',
        './tinymce/plugins/table/plugin.min.js',
        './tinymce/plugins/charmap/plugin.min.js',
        './tinymce/plugins/hr/plugin.min.js',
        './tinymce/plugins/nonbreaking/plugin.min.js',
        './tinymce/plugins/advlist/plugin.min.js',
        './tinymce/plugins/lists/plugin.min.js',
        './tinymce/plugins/wordcount/plugin.min.js',
        './tinymce/plugins/imagetools/plugin.min.js',
        './tinymce/plugins/textpattern/plugin.min.js',
        './tinymce/plugins/autosave/plugin.min.js',
        './tinymce/plugins/autoresize/plugin.min.js',
        './tinymce/plugins/formatpainter/plugin.min.js',

    ], {sourcemaps: false})
        .pipe(concat('plugins.all.min.js'))
        .pipe(uglify())
        .pipe(dest('./tinymce/', {sourcemaps: false}))
}

exports.default = series(plugins)
