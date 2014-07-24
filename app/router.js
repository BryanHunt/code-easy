import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CodeEasyENV.locationType
});

Router.map(function() {
  this.resource('functions');
});

export default Router;
