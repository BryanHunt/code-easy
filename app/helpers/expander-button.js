import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return new Ember.Handlebars.SafeString('<button class="toggle" data-toggle="collapse" data-target=' + value + '><span class="icon fa fa-plus-square-o"></span></button>');
});
