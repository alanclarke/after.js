/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: '<json:after.jquery.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<file_strip_banner:src/getElements.js>','<file_strip_banner:src/domready/domready.js>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    'requirejs-concat': {
        min:{
          src: 'src/after.run.js',
          dest: 'dist/pictonic.min.js'
        },
        concat:{
          src: 'src/after.run.js',
          dest: 'dist/pictonic.js',
          opts : { 
            optimize:'none'
          }
        }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'qunit requirejs-concat'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-requirejs-tasks');

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min');

};
