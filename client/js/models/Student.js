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

  initialize: function() {
  	this.set("nickname", generateNickname());
  },

  // flip: function() {
  // 	console.log('FLIPPED!!!');
  //   this.set('revealed', !this.get('revealed'));
  //   return this;
  // }

});