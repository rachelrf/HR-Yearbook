var NavBarView = Backbone.View.extend({
  
  el: '#navbar-container',

  initialize: function() {
    this.render();
  },

  render: function() {
  	
  	this.$el.html('<button class="HR36-button">HR36</button><button class="HR37-button">HR37</button>');
  }

});

