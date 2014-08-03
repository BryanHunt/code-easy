import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CodeEasyENV.locationType
});

Router.map(function() {
  this.route('experimental');
});

export default Router;
