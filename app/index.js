var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = AppGenerator;

var separator = '\n=====================================';

function AppGenerator() {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());

  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
}

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.someQuestions = function someQuestions() {
  var welcome = separator.yellow +
    '\n                             _'.red.bold +
    '\n      /\\                    '.yellow.bold + '(_)'.red.bold +
    '\n     /  \\  _   _ _ __ __ _   '.yellow.bold + '_ ___ '.red.bold +
    '\n    / /\\ \\| | | | \'__/ _` |'.yellow.bold + ' | / __|'.red.bold +
    '\n   / ____ \\ |_| | | | (_| |_'.yellow.bold + '| \\__ \\'.red.bold +
    '\n  /_/    \\_\\__,_|_|  \\__,_(_)'.yellow.bold + ' |___/'.red.bold +
    '\n                           _/ |'.red.bold +
    '\n                          ' + '|__/'.red.bold +
    separator.yellow + '\n'.yellow;

  console.log(welcome);

  console.info('Generating your awesome app. Stay tuned ;)');
  console.info(separator);
};

AppGenerator.prototype.git = function git() {
  this.copy('common/gitignore', '.gitignore');
  this.copy('common/gitattributes', '.gitattributes');
};

AppGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('common/editorconfig', '.editorconfig');
};

AppGenerator.prototype.jsHint = function jsHint() {
  this.copy('common/jshintrc', '.jshintrc');
};

AppGenerator.prototype.travis = function travis() {
  this.copy('common/travis.yml', 'travis.yml');
};

AppGenerator.prototype.bower = function bower() {
  this.template('common/bower.json', 'bower.json');
  this.copy('common/bowerrc', '.bowerrc');
};

AppGenerator.prototype.readme = function readme() {
  this.template('common/readme.md', 'readme.md');
}

AppGenerator.prototype.spec = function spec() {
  this.template('spec/index.html', 'spec/index.html');
  this.template('spec/runner.js', 'spec/runner.js');
}

AppGenerator.prototype.packageJson = function packageJson() {
  this.template('common/package.json', 'package.json');
};

AppGenerator.prototype.gruntFile = function gruntFile() {
  this.copy('common/Gruntfile.js', 'Gruntfile.js');
};

AppGenerator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('spec');
  this.mkdir('app');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('app/aura_components');
  this.mkdir('app/extensions');
};

AppGenerator.prototype.app = function app() {
  this.copy('app/favicon.ico', 'app/favicon.ico');
  this.copy('app/404.html', 'app/404.html');
  this.copy('app/robots.txt', 'app/robots.txt');
  this.copy('app/crossdomain.xml', 'app/crossdomain.xml');
  this.copy('app/htaccess', 'app/.htaccess');
  this.template('app/index.html', 'app/index.html');
  this.template('app/main.js', 'app/main.js');
};

AppGenerator.prototype.component = function component() {
  this.invoke('aura:component', {
    args: ['title']
  });
};

AppGenerator.prototype.hint = function hint() {
  console.info(separator);
  console.info('\nReady.'.bold);
  console.info('\nAfter selecting preferred style for your app just run ' + 'npm install'.bold.yellow +' and ' + 'bower install --dev'.bold.yellow + ' to install the required dependencies.');
  console.info(separator);
};

AppGenerator.prototype.styles = function styles() {
   this.invoke('aura:styles', {
    args: []
  });
};