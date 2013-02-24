'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.argument('extensionname', { type: String, required: true });
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.creatExtensionFiles = function creatExtensionFiles() {
  this.template('extensions/main.js', 'app/extensions/' + this.extensionname + '.js');
  // TODO: generate test
};