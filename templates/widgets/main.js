define(['underscore'], function (_) {

  return {

    initialize: function () {
      _.bindAll(this);
       this.render();
    },

    render: function () {
      this.$el.html('<h1>Hello Aura!</h1>');
    }

  };

});