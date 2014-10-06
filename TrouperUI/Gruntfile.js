module.exports = function (grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    sass: {
      options: {
        sourceComments: 'map',
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'css/styles.css': 'sass/styles.scss'
        }
      }
    },
    bower_concat: {
      all: {
        dest: 'public/javascripts/bower.js'
      }
    }
    });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.registerTask('default', ['sass:dist', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
	
