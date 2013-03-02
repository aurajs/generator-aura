'use strict';

var assert = require('assert');
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('Aura generator', function() {

  var aura;

  beforeEach(function(done) {
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
      aura = helpers.createGenerator('aura:app', deps);
      done();
    });
  });

  it ('should generate git files', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['.gitignore', '.gitattributes']);
      done();
    });
  });

  it ('should generate support files', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['.jshintrc', '.editorconfig']);
      done();
    });
  });

  it ('should generate bower files', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['component.json', '.bowerrc']);
      done();
    });
  });

  it ('should generate readme file', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['readme.md']);
      done();
    });
  });

  it ('should generate spec files', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['spec/index.html', 'spec/runner.js']);
      done();
    });
  });

  it ('should generate package file', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['package.json']);
      done();
    });
  });

  it ('should generate grunt file', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['Gruntfile.js']);
      done();
    });
  });

  it ('should generate app files', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
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
});