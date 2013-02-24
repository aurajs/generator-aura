'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = ExtensionGenerator;

function ExtensionGenerator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.argument('name', { type: String, required: true });
}

util.inherits(ExtensionGenerator, yeoman.generators.Base);

ExtensionGenerator.prototype.creatExtensionFiles = function creatExtensionFiles() {
  this.template('extensions/main.js', 'app/extensions/' + this.name + '.js');
  // TODO: generate test
};