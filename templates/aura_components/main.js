define(['underscore'], function (_) {
  'use strict';

  return {

    initialize: function () {
      this.$el.on('click', _.bind(this.someCoolFeature, this));
      this.render();
    },

    render: function () {
      //Place render logic here
      this.$el.html('Click me: ' + this.$el.html());
    },

    someCoolFeature: function () {
      //Awesome code
      var element = this.$el;
      element.fadeOut(200, function () {
        element.fadeIn(200);
      });
    }
  };

});
