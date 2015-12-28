var ProfileView = Backbone.View.extend({
	template: _.template('<div class="student_profile">Name: <%= name %> <br />Cohort: <%= cohort %><div class="student-element student-photo" style="background-image: url(<%= image %>)"></div></div>'),
  events: {

  },

  initialize: function() {
  },

  render: function() {
  	console.log('inside ProfileView');
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});