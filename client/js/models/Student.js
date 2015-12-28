var Student = Backbone.Model.extend({
  
  defaults: {
    id: 0,
    name: '',
    cohort: 0,
    image: '',
    first: '',
    last: '',
    nickname: '',
  },

  initialize: function(studentData) {
    console.log("STUDENT PARAM " + studentData.id);
  	this.set("nickname", generateNickname());
    this.url = 'https://hr-yearbook.herokuapp.com/api/students/' + studentData.id;
  }


});