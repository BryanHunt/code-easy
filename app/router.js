import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CodeEasyENV.locationType
});

Router.map(function() {
  this.route('experimental');
  this.route('application');
  this.resource('classes', function() {
    this.resource('class', {path: '/:id'});
    this.route('new');
  });
});

export default Router;
