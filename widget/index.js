'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.argument('widgetname', { type: String, required: true });
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.creatWidgetFiles = function creatWidgetFiles() {
  this.template('widgets/main.js', 'app/widgets/' + this.widgetname + '/main.js');
  // TODO: generate test
};