define(['underscore'], function (_) {

  return {

    initialize: function () {
      this.$el.on('click', this.someCoolFeature.bind(this));
      this.render();
    },

    render: function () {
      //Place render logic here
      this.$el.html('Click me: ' + this.$el.html());
    },

    someCoolFeature: function(){
      //Awesome code
      var element = this.$el;
      element.fadeOut(200, function(){
        element.fadeIn(200);
      });
    }
  };

});