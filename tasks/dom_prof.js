/*
 * grunt-dom-prof
 * https://github.com/jeremy/grunt-dom-prof
 *
 * Copyright (c) 2014 Jeremy Green
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerTask('dom_prof', 'Grunt plugin for dom-prof', function() {
    var done = this.async(),
        options = this.options({
          raw: false
        }),
        url = options.url,
        dest = options.dest;

    if (url === undefined) {
      grunt.fail.warn('URL is empty.');
      return false;
    }

    grunt.verbose.write('Running `dom-prof` on ' + url);

    var profile = require('dom-prof').profile;
    profile(url).then(function(report) {
      if (typeof dest !== 'undefined') {
        var output = '';

        if (!options.raw) {
          var  keys = Object.keys(report),
              vals = [];

          output += keys.join(',');
          output += '\r\n';

          keys.forEach(function(element, index, array) {
            if (typeof report[element] !== 'object') {
              vals.push(report[element]);
            } else {
              if (typeof report[element].total !== 'undefined') {
                vals.push(report[element].total);
              } else {
                vals.push(Object.keys(report[element]).length);
              }
            }
          });

          output += vals.join(',');
        } else {
          output = JSON.stringify(report);
        }

        grunt.file.write(dest, output);
        grunt.log.ok('Saved report to ' + dest);
      } else {
        //no file -- dump the output
        grunt.log.write(JSON.stringify(report));
      }
    }, function(error) {
      grunt.fail.warn(error);
    });

  });

};
