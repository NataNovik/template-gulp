const {dest, src, parallel} = require('gulp');
const imagemin = require('gulp-imagemin');
// /--image compression function--
function images() {
    return src('./src/assets/images/**/*')
        .pipe(imagemin())
        .pipe(dest('build'))
}

exports.default = parallel(images)