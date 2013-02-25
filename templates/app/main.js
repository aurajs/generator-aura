require.config({
  paths: {
    aura: 'components/aura/lib',
    jquery: 'components/jquery/jquery',
    underscore: 'components/underscore/underscore'
  }
});

require(['aura/aura'], function (Aura) {
  'use strict';

  var app = new Aura();

  /*
  Add your extensions here.
  app.use('extensions/sample');
  */
  app.start({ widgets: 'body' });
});