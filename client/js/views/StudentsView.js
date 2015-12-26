var StudentsView = Backbone.View.extend({
 
   tag: null,
   el: null,

  initialize: function() {
    this.render();

    this.collection.on("change reset add remove", this.render, this);


  },

  render: function() {
  	
  	// this.$el.children().detach();

  	$('#page-content-container').html(this.collection.map(function(student) {
  	  return new StudentEntryView({model: student}).$el;
  	}));



  	return this;

  }

});