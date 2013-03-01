'use strict';

var fs = require('fs');
var assert = require('assert');
var path = require('path');
var util = require('util');
var generators = require('yeoman-generator');
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

  it ('should generate support files', function (done) {
    helpers.mockPrompt(aura, {'styles': 'D'});
    aura.run({}, function() {
      helpers.assertFiles(['.bowerrc', '.gitignore', '.editorconfig', '.jshintrc']);
      done();
    });
  });
});
