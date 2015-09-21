var child_process = require('child_process')

module.exports = function(options) {

  var gulp = options.gulp

  gulp.task('clean', function(done) {

    child_process.execSync('rm -rf public')

    done()

  })

}
