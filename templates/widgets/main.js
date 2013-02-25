define(['underscore'], function (_) {

  return {

    initialize: function () {
      _.bindAll(this);

      this.$el.click(this.someCoolFeature)
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