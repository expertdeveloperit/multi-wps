var gulp = require('gulp');
var changed = require('gulp-changed');
var rename = require("gulp-rename");
gulp.task('mobile', function() {
   var mobileBuildSrc = 'mobile/wpc/build/**/*.*',
   mobileBuildDst = 'build/mobile';
   gulp.src(mobileBuildSrc)
   .pipe(changed(mobileBuildDst))
   .pipe(gulp.dest(mobileBuildDst));
});

gulp.task('desktop', function() {
   var mobileBuildSrc = 'desktop/wpc/build/**/*.*',
   mobileBuildDst = 'build/desktop';
   gulp.src(mobileBuildSrc)
   .pipe(changed(mobileBuildDst))
   .pipe(gulp.dest(mobileBuildDst));
});
gulp.task('default',['mobile','desktop'],function(){
console.log("Build Placed");
});
