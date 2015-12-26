var LandingView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
  	this.$el.html(new NavBarView);

    $('body').append(this.el);
  }

});
