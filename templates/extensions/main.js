define(function () {
  'use strict';

  return {
    name: '<%= _.slugify(name) %>',
    initialize: function (application) {
      // Your brilliant code here!
      application.logger.log('Initializing extension: <%= _.slugify(name) %>');
    }
  };

});
