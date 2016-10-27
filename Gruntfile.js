'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
      "babel": {
        options: {

          sourceMap: true,
          "presets": ["es2015", 'react'],
          // "plugins": ["transform-export-extensions"]
        },
        dist: {
          files: [{
                expand: true,
                cwd: 'src/js/', // Custom folder
                src: ['*.js'],
                dest: 'src/es6ForBuild/', // Custom folder
                // ext: '.js'
              }]
              
        }
      },
      browserify: {
        dist: {
          files: {
            'build/js/js.js': ['src/es6ForBuild/app.js']
          },
        }
      }

    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');

    // grunt.loadNpmTasks('grunt-string-replace');

    // grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['babel', 'browserify']);
    // grunt.registerTask('watcher', ['watch']);

};