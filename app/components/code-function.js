import Ember from 'ember';

export default Ember.Component.extend({
  functionId: function() {
    return this.get('function.name') + this.get('function.id');
  }.property('function.name'),

  functionSelector: function() {
    return "#" + this.get('functionId');
  }.property('functionId')
});
