var AppView = Backbone.View.extend({

  el: '#app-container',

  events: {
    'click .HR36-button': function() {
      //this.renderCohort(36);
      window.location.hash = "cohort/36";
      this.startSpinner();
    },

    'click .HR37-button': function() {
      //this.renderCohort(37);
      window.location.hash = "cohort/37";
      this.startSpinner();
    }
  },

  initialize: function(options) {

    window.router = options.router;

    options.router.on('route:landing', function() {
      this.renderLanding(); 
      
    }.bind(this));

    options.router.on('route:cohortPage', function(cohort) {
      console.log("Cohort route ", cohort);
      this.renderCohort(cohort); 
      
    }.bind(this));

    options.router.on('route:studentPage', function(studentID) {
      
      this.renderStudentProfile(studentID); 
      
    }.bind(this));

  },

  renderCohort: function(cohort) {
    this.studentsCollection = window.studentsCollection = new Students(cohort);
    var studentsView = new StudentsView({collection: this.studentsCollection}); 
  },

  renderStudentProfile: function(studentID) {
    console.log('rendering student profile from app view', studentID);
    console.log(studentID, (typeof studentID));
    var studentModel = this.studentsCollection.get(studentID);
    var profileView = new ProfileView({model: studentModel});
    $('#page-content-container').html(profileView.render().$el);

  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());
  },

  startSpinner: function() {
    spinnerInit();
  },
})