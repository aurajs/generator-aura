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

  this.hookFor('aura:widget', {
    args: ['title']
  });

  this.on('end', function () {
    console.info(separator);
    console.info('\nReady.'.bold);
    console.info('\nJust run ' + 'npm install'.bold.yellow +' and ' + 'bower install --dev'.bold.yellow + ' to install the required dependencies.');
    console.info(separator);
  });
}

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.someQuestions = function someQuestions() {
  var welcome =separator.yellow +
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
  this.copy('/common/gitignore', '.gitignore');
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
  this.template('common/component.json', 'component.json');
  this.copy('common/bowerrc', '.bowerrc');
};

AppGenerator.prototype.readme = function readme() {
  this.template('common/readme.md', 'readme.md');
}

AppGenerator.prototype.packageJson = function packageJson() {
  this.template('common/package.json', 'package.json');
};

AppGenerator.prototype.gruntFile = function gruntFile() {
  this.template('common/Gruntfile.js', 'Gruntfile.js');
};

AppGenerator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('app/widgets');
  this.mkdir('app/extensions');
};

AppGenerator.prototype.app = function app() {
  this.copy('app/favicon.ico', 'app/favicon.ico');
  this.copy('app/404.html', 'app/404.html');
  this.copy('app/robots.txt', 'app/robots.txt');
  this.copy('app/htaccess', 'app/.htaccess');
  this.template('app/index.html', 'app/index.html');
  this.template('app/main.js', 'app/main.js');
  this.template('styles/reset.css', 'app/styles/reset.css');

};