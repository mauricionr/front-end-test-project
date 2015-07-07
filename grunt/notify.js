/**
 * Notify - displays simple notifications about some grunt tasks.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('notify', {
    options: {
      title: 'Front End Test Project'
    },
    build: {
      options: {
        message: 'Build Completed'
      }
    },
    validation: {
      options: {
        message: 'HTML Validation Completed'
      }
    }
  });
};
