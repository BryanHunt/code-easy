import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
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
