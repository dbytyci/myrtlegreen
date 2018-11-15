import gulp     from 'gulp'
import sass     from 'gulp-sass'
import cssnano  from 'gulp-cssnano'

import { scripts } from './webpack'
import { server }  from './server'
import { registerCss, registerJs, generate }  from './filesystem'

export const styles = () => {
    return gulp.src('css/scss/main.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('css/dist/'));
};

export const watch = () => {
    gulp.series( styles );
    gulp.watch('css/scss/**/*.scss', gulp.series( styles ));
};

export const dev   = gulp.series( server );
export const build = gulp.series( scripts );
export const write = gulp.series( registerCss, registerJs, generate );

export default dev
