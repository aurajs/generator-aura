/*global define mocha */
var should;

require.config({
  baseUrl: '../',
  paths: {
    chai: 'node_modules/chai/chai',
    sinonChai:'node_modules/sinon-chai/lib/sinon-chai'
  }
});

define(['chai', 'sinonChai'], function (chai, sinonChai) {
  window.chai = chai;
  window.expect = chai.expect;
  window.assert = chai.assert;
  window.should = chai.should();
  window.sinonChai = sinonChai;
  window.notrack = true;

  chai.use(sinonChai);
  mocha.setup('bdd');

  require([], function () {
    mocha.run();
  });
});
