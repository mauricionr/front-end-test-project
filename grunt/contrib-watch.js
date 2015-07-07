/**
 * Watch - observes changes in files and rebuild them as needed.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    options: {
      dot: true,
      spawn: false
    },

    compileCSS: {
      files: ['<%= xh.src %>/less/**/*.less'],
      tasks: ['build-css'],
      options: {
        livereload: true
      }
    },

    html: {
      files: ['<%= xh.src %>/*.html'],
      tasks: ['build-html'],
      options: {
        livereload: true
      }
    },

    usemin: {
      files: ['<%= xh.includes %>/<%= xh.usemin %>'],
      tasks: ['build-usemin', 'build-html'],
      options: {
        livereload: true
      }
    },

    includes: {
      files: ['<%= xh.includes %>/*.html', '!<%= xh.includes %>/<%= xh.usemin %>'],
      tasks: ['newer:copy:includes', 'build-html'],
      options: {
        livereload: true
      }
    },

    js: {
      files: ['<%= xh.src %>/js/*.js'],
      tasks: ['build-js'],
      options: {
        livereload: true
      }
    },

    assets: {
      files: ['<%= xh.src %>/<%= xh.assets %>/**/*'],
      tasks: ['build-assets'],
      options: {
        livereload: true
      }
    }
  });
};
