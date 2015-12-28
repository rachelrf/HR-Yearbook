var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function (cohort) {
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + cohort;
    
  },

  populateCohort: function() {
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!
    
    // use fetch to get the student data, and make a student model for each 


  }
});