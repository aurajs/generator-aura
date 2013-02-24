var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());

  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));

   this.on('end', function () {
    console.log('\nReady. Run ' + 'npm install'.bold.yellow +' and ' + 'bower install --dev'.bold.yellow + ' to install the required dependencies.');
  });
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('app/widgets');
  this.mkdir('app/extensions');
};

Generator.prototype.git = function() {
  this.copy('/common/gitignore', '.gitignore');
  this.copy('common/gitattributes', '.gitattributes');
};

Generator.prototype.editorConfigs = function() {
  this.copy('common/jshintrc', '.jshintrc');
  this.copy('common/editorconfig', '.editorconfig');
};

Generator.prototype.infrastructure = function() {
  this.copy('common/component.json', 'component.json');
  this.copy('common/package.json', 'package.json');
  this.copy('common/Gruntfile.js', 'Gruntfile.js');
  this.copy('common/bowerrc', '.bowerrc');
  this.copy('common/travis.yml', 'travis.yml');
};

Generator.prototype.indexFile = function createIndexFile() {
  this.template('app/index.html', 'app/index.html');
  this.template('app/main.js', 'app/main.js');
  this.template('styles/reset.css', 'app/styles/reset.css');
  this.template('widgets/main.js', 'app/widgets/title/main.js');
};