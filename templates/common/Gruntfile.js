'use strict';

var lrSnippet = require('connect-livereload')();
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-mocha');

  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    yeoman: yeomanConfig,
    open: {
      server: {
        url: 'http://localhost:<%= connect.server.options.port %>/app'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.')
            ];
          }
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: '.',
          optimize: 'none',
          paths: {
            aura: 'app/components/aura/lib',
            jquery: 'empty:',
            underscore: 'empty:',
            eventemitter: 'app/components/eventemitter2/lib/eventemitter2'
          },
          shim: {
            underscore: {
              exports: '_'
            }
          },
          include: [
            'app/main'
          ],
          exclude: ['jquery', 'aura/aura'],
          out: '<%= yeoman.dist %>/main.js'
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,txt,js,html}',
            '.htaccess',
            'components/**/*',
            'images/**/*',
            'styles/**/*',
            'widgets/**/*',
            'extensions/**/*'
          ]
        }]
      }
    },
    jshint: {
      all: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: [
          'app/widgets/**.js',
          'app/extensions/**.js',
          'app/main.js',
          ]
        }
      }
    },
    compass: {
      options: {
        sassDir : '<%= yeoman.app %>/styles',
        cssDir: '<%= yeoman.app %>/styles',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: '<%= yeoman.app %>/components',
        force: true,
        relativeAssets: true
      },
      main: {}
    },
    mocha: {
      all: {
        options: {
          urls: ['http://localhost:<%= connect.server.options.port %>/spec/index.html']
        },
        dist: {},
      }
    },
    watch: {
      options: {
        livereload: true
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass']
      },
      spec: {
        files: [
          '!node_modules/**/*.js',
          '**/*.js'
        ],
        tasks: ['watch-spec']
      },
      livereload: {
        files: [
          'app/*.html',
          'app/styles/*.css',
          'app/{extensions,widgets}/*.js',
          'app/images/*.{png,jpg,jpeg}'
        ],
        tasks: ['default']
      }
    },
    clean: {
      dist: ['<%= yeoman.dist %>/**']
    }
  });

  grunt.registerTask('server', ['connect:server', 'open', 'watch']);
  grunt.registerTask('spec', ['jshint', 'connect', 'mocha']);
  // watch-spec allows us to use the spec task within a watch without having
  // connect try to launch a server on each cycle (which throws a Fatal error);
  grunt.registerTask('watch-spec', ['jshint', 'mocha']);
  grunt.registerTask('build', ['clean', 'compass', 'spec', 'copy', 'requirejs']);
  grunt.registerTask('default', ['compass', 'spec', 'watch']);
};
