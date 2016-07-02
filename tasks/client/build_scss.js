import gulp from 'gulp';
import sass from 'gulp-sass';
import {path, tasks} from './const';

const SCSS = path.DIST + '**/*.scss';

gulp.task(tasks.CLIENT_SCSS_DIST, () => {
  return gulp.src(SCSS, {base: path.DIST})
             .pipe(sassmin())
             .pipe(gulp.dest(path.DIST));
});
