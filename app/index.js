var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

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
  var welcome = chalk.yellow(separator) +
            chalk.red('\n                             _') +
         chalk.yellow('\n      /\\                    ') +     chalk.red.bold('(_)') +
    chalk.yellow.bold('\n     /  \\  _   _ _ __ __ _   ') +     chalk.red.bold('_ ___ ') +
    chalk.yellow.bold('\n    / /\\ \\| | | | \'__/ _` |') +   chalk.red.bold(' | / __|') +
    chalk.yellow.bold('\n   / ____ \\ |_| | | | (_| |_') +     chalk.red.bold('| \\__ \\') +
    chalk.yellow.bold('\n  /_/    \\_\\__,_|_|  \\__,_(_)') +   chalk.red.bold(' |___/') +
                                 chalk.red.bold('\n                           _/ |') +
                            chalk.red.bold('\n                          ' + '|__/') +
    chalk.yellow(separator) +
    chalk.yellow('\n');

  console.log(welcome);

  console.info('Generating your awesome app. Stay tuned ;)');
  console.info(chalk.yellow(separator));
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
  console.info(chalk.yellow(separator));
  console.info(chalk.bold('\nReady.'));
  console.info('\nAfter selecting preferred style for your app just run ' + chalk.bold.yellow('npm install') +' and ' + chalk.bold.yellow('bower install --dev') + ' to install the required dependencies.');
  console.info(chalk.yellow(separator));
};

AppGenerator.prototype.styles = function styles() {
   this.invoke('aura:styles', {
    args: []
  });
};