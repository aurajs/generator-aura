'use strict';

var assert = require('assert');
var path = require('path');
var helpers = require('yeoman-generator').test;
var path = require('path');

describe('Aura generator', function() {

  var auraGeneraor;

  beforeEach(function(done) {
    process.chdir(__dirname);
    var deps = [
      '../../app',
      '../../styles',
      '../../extension',
      '../../widget'
    ];
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        done(err);
      }
      auraGeneraor = helpers.createGenerator('aura:app', deps);
      done();
    });
  });

  it ('should create directory layout', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles([
        'spec',
        'app',
        'app/styles',
        'app/images',
        'app/aura_components',
        'app/extensions'
      ]);
      done();
    });
  });

  it ('should generate git files', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles(['.gitignore', '.gitattributes']);
      done();
    });
  });

  it ('should generate support files', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles(['.jshintrc', '.editorconfig']);
      done();
    });
  });

  it ('should generate bower files', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles(['component.json', '.bowerrc']);
      done();
    });
  });

  it ('should generate readme file', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles(['readme.md']);
      done();
    });
  });

  it ('should generate spec files', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles(['spec/index.html', 'spec/runner.js']);
      done();
    });
  });

  it ('should generate package file', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles(['package.json']);
      done();
    });
  });

  it ('should generate grunt file', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles(['Gruntfile.js']);
      done();
    });
  });

  it ('should generate app files', function (done) {
    helpers.mockPrompt(auraGeneraor, {'styles': 'D'});
    auraGeneraor.run({}, function() {
      helpers.assertFiles([
        'app/favicon.ico',
        'app/404.html',
        'app/robots.txt',
        'app/crossdomain.xml',
        'app/.htaccess',
        'app/index.html',
        'app/main.js'
      ]);
      done();
    });
  });

  it ('should generate widget', function (done) {
    var deps = ['../../widget'];
    var widgetGenerator = helpers.createGenerator('aura:widget', deps, ['coolWidget']);
    widgetGenerator.run([], function() {
      helpers.assertFiles(['app/aura_components/coolWidget/main.js']);
      done();
    });
  });

  it ('should generate extension', function (done) {
    var deps = ['../../extension'];
    var widgetGenerator = helpers.createGenerator('aura:extension', deps, ['coolExtension']);
    widgetGenerator.run([], function() {
      helpers.assertFiles(['app/extensions/coolExtension.js']);
      done();
    });
  });


  it ('should generate foundation styles', function (done) {
    var deps = ['../../styles'];
    var stylesGenerator = helpers.createGenerator('aura:styles', deps);
    helpers.mockPrompt(stylesGenerator, {'styles': 'f'});
    stylesGenerator.run([], function() {
      helpers.assertFiles([
        'app/styles/foundation.css',
        'app/styles/main.css'
      ]);
      done();
    });
  });

  it ('should generate bootstrap compass styles', function (done) {
    var deps = ['../../styles'];
    var stylesGenerator = helpers.createGenerator('aura:styles', deps);
    helpers.mockPrompt(stylesGenerator, {'styles': 'b4c'});
    stylesGenerator.run([], function() {
      helpers.assertFiles([
        // 'app/styles/_compass_twitter_bootstrap_awesome.scss',
        'app/images/glyphicons-halflings.png',
        'app/images/glyphicons-halflings-white.png',
        'app/styles/main.scss'
      ]);
      done();
    });
  });

  it ('should generate bootstrap styles', function (done) {
    var deps = ['../../styles'];
    var stylesGenerator = helpers.createGenerator('aura:styles', deps);
    helpers.mockPrompt(stylesGenerator, {'styles': 'b'});
    stylesGenerator.run([], function() {
      helpers.assertFiles([
        'app/styles/bootstrap.css',
        'app/images/glyphicons-halflings.png',
        'app/images/glyphicons-halflings-white.png',
        'app/styles/main.css'
      ]);
      done();
    });
  });

  it ('should generate base styles', function (done) {
    var deps = ['../../styles'];
    var stylesGenerator = helpers.createGenerator('aura:styles', deps);
    helpers.mockPrompt(stylesGenerator, {'styles': 'D'});
    stylesGenerator.run([], function() {
      helpers.assertFiles([
        'app/styles/normalize.css',
        'app/styles/main.css'
      ]);
      done();
    });
  });
});
