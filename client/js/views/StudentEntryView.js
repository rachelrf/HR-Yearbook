var StudentEntryView = Backbone.View.extend({

  template: _.template('<div class="student" style="background-image: url(<%= image %>)"></div>'),

  events: {
    'mouseenter .student': 'flipstudent',
    'mouseleave .student': 'unflipstudent'
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

  flipstudent: function(e) {
    if (this.flipped) return;
    console.log('mouseover working');
    this.flipped = true;
    this.$el.addClass('flipped');
  },

  unflipstudent: function(e) {
    console.log('mouseleave working');
    this.flipped = false;
    this.$el.removeClass('flipped');
  },


});