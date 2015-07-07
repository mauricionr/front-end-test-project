/**
 * Spritesmith - automatically creates sprites from the specifed files.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('sprite', {
    dist1x: {
      src: '<%= xh.src %>/img/sprites/1x/*.{png,jpg,gif}',
      destImg: '<%= xh.dist %>/img/common/sprites@1x.png',
      destCSS: '<%= xh.src %>/less/setup/sprites@1x.less',
      cssTemplate: '<%= xh.src %>/less/setup/sprites.less.mustache',
      algorithm: 'binary-tree',
      engine: 'pngsmith',
      padding: 2,
      cssOpts: {
        map: 'sprite-1x'
      }
    },
    dist2x: {
      src: '<%= xh.src %>/img/sprites/2x/*.{png,jpg,gif}',
      destImg: '<%= xh.dist %>/img/common/sprites@2x.png',
      destCSS: '<%= xh.src %>/less/setup/sprites@2x.less',
      cssTemplate: '<%= xh.src %>/less/setup/sprites.less.mustache',
      algorithm: 'binary-tree',
      engine: 'pngsmith',
      padding: 4,
      cssOpts: {
        map: 'sprite-2x',
        functions: false
      }
    }
  });
};
