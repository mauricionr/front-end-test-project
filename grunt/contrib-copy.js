/**
 * Copy - copies files like assets or temporary build files.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('copy', {
    jquery: {
      expand: true,
      cwd: '<%= xh.src %>/bower_components/jquery/dist/',
      src: ['jquery.min.js', 'jquery.min.map'],
      dest: '<%= xh.dist %>/js/'
    },

    // copy assets other than images-to-be-optimized
    // (imagemin & svg2png tasks will take care of that)
    assets: {
      files: [
        {
          expand: true,
          cwd: '<%= xh.src %>',
          src: ['<%= xh.assets %>/**/*.*', '!<%= xh.images %>/**/*.{png,jpg,gif,svg}', '!**/.keep'],
          dest: '<%= xh.dist %>'
        }
      ]
    },

    js: {
      expand: true,
      cwd: '<%= xh.src %>/js/',
      src: ['main.js'],
      dest: '<%= xh.dist %>/js/'
    },

    // copy all include files to temporary folder
    // so that original includes aren't ever modified
    includes: {
      expand: true,
      cwd: '<%= xh.includes %>',
      src: [ '*.*' ],
      dest: '<%= xh.tmp %>'
    }
  });
};
