
var StudentsView = Backbone.View.extend({
 
   tag: null,
   el: null,

  initialize: function() {
    
    this.collection.fetch({
      reset: true,                
      success: function(collection, response, options) {
        this.render();
      }.bind(this),
      error: function(collection, response, options) {

      }
    });

  },

  render: function() {
  	
  	console.log("Render students view");


  	// this.$el.children().detach();

  	$('#page-content-container').html(this.collection.map(function(student) {
  	  return new StudentEntryView({model: student}).$el;
  	}));



  	return this;

  }

});