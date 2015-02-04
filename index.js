var sh = require('execSync')

module.exports = (options) => {

  var gulp = options.gulp

  gulp.task('clean', function(done) {

    /*
    Note, the gulp-clean task is janky
    */
    //src('./public/**/*', {read: false}).pipe(clean())

    sh.run('rm -rf public')

    done()

  })

}
