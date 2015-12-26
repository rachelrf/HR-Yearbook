var AppView = Backbone.View.extend({

  el: '#app-container',

  events: {
    'click .HR36-button': function() {
      this.renderCohort(36);
    },

    'click .HR37-button': function() {
      this.renderCohort(37);
    },
  },

  initialize: function(options) {


    options.router.on('route:landing', function() {
      this.renderLanding(); 
      
    }.bind(this));

    options.router.on('route:cohort', function(cohort) {
      this.renderCohort(cohort); 
      
    }.bind(this));

  },

  renderCohort: function(cohort) {
    

    var studentsCollection = new Students(cohort);

    var studentsView = new StudentsView({collection: studentsCollection});

    
  },

  renderLanding: function() {
    

    $('#page-content-container').html(new LandingView().render());   
  }
})