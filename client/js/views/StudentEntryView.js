var StudentEntryView = Backbone.View.extend({

  template: _.template($('#studentEntryTemplate').html()),

  events: {
    'mouseenter .student': 'flipstudent',
    'mouseleave .student': 'unflipstudent',
    'click .student': 'studentProfile'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    
    // this.$el.children().detach();
    
    this.$el.html(this.template(this.model.attributes));
    this.delegateEvents();

    return this;
  },

//

  flipstudent: function(e) {
    if (this.flipped) return;
    this.flipped = true;
    this.$el.children().children('.student-element').addClass('flipped');
    var name = this.model.get('name').split(' ');
    this.$el.children().children('.student-name').text(name[0] + ' "' + this.model.get('nickname') + '" ' + name[1]);
  },

  unflipstudent: function(e) {
    this.flipped = false;
    this.$el.children().children('.student-element').removeClass('flipped');
  },

  studentProfile: function(e) {
    var studentID = this.model.get('id');
    window.location.hash = "student/" + studentID;
  }


});