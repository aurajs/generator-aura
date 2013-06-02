var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = StylesGenerator;

var separator = '\n=====================================';

function StylesGenerator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
}

util.inherits(StylesGenerator, yeoman.generators.Base);

StylesGenerator.prototype.interactive = function interactive() {
  var cb = this.async();

  var prompts = [{
    name: 'styles',
    message: 'What css framework do you like to use?'.bold.green,
    default: '\n D   : Default (normalize.css)'+
             '\n b   : Twitter Bootstrap'+
             '\n b4c : Twitter Bootstrap for Compass'+
             '\n f   : Zurb Foundation' +
             '\n f4c : Zurb Foundation for Compass' //TODO: fix build or buy book about Ruby
  }];

  this.prompt(prompts, function(err, props) {
    if (err) {
      return this.emit('error', err);
    }
    this.styles = props.styles;
    console.info(separator);
    cb();
  }.bind(this));
};

StylesGenerator.prototype.scaffold = function scaffold() {
  if(this.styles === 'b'){
    this._bootstrap();
  }else if(this.styles === 'b4c'){
    this._bootstrapCompass();
  }else if(this.styles === 'f'){
    this._foundation();
  }else if(this.styles === 'f4c'){
    this._foundationCompass();
  }else{
    this._normalizeCss();
  }
};

StylesGenerator.prototype._normalizeCss = function _normalizeCss() {
  this.copy('styles/normalize.css', 'app/styles/normalize.css');
  this.write('app/styles/main.css', '@import "normalize.css";');
};

StylesGenerator.prototype._bootstrap = function _bootstrapC() {
  this.copy('styles/bootstrap/bootstrap.css', 'app/styles/bootstrap.css');
  this.copy('styles/bootstrap/glyphicons-halflings.png', 'app/images/glyphicons-halflings.png');
  this.copy('styles/bootstrap/glyphicons-halflings-white.png', 'app/images/glyphicons-halflings-white.png');
  this.write('app/styles/main.css', '@import "bootstrap.css";');
};

StylesGenerator.prototype._bootstrapCompass = function _bootstrapCompass(cb) {
  var cb = this.async();

  this.write('app/styles/main.scss', '@import "compass_twitter_bootstrap_awesome";');
  this.copy('styles/bootstrap/glyphicons-halflings.png', 'app/images/glyphicons-halflings.png');
  this.copy('styles/bootstrap/glyphicons-halflings-white.png', 'app/images/glyphicons-halflings-white.png');

  this.remote('vwall', 'compass-twitter-bootstrap', '95016c0572bd26c8e2f8ab62e09d9ff6048d0084', function (err, remote) {
    if (err) {
      return cb(err);
    }
    remote.directory('stylesheets', 'app/styles');
    cb();
  });
};

StylesGenerator.prototype._foundation = function _foundation() {
  this.copy('styles/foundation/foundation.css', 'app/styles/foundation.css');
  this.write('app/styles/main.css', '@import "foundation.css";');
};

StylesGenerator.prototype._foundationCompass = function _foundationCompass() {
  var cb = this.async();

  this.write('app/styles/main.scss', '@import "foundation";');

  this.remote('zurb', 'foundation', '683f6cb090875fd77fd1cdb781c5b37e092167d4', function (err, remote) {
    if (err) {
      return cb(err);
    }
    remote.directory('scss', 'app/styles');
    cb();
  });
};
