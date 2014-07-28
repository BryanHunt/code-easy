import Ember from 'ember';

export default Ember.Component.extend({
  bodyId: function() {
    return this.get('function.name') + this.get('function.id');
  }.property('function.name'),

  bodySelector: function() {
    return "#" + this.get('bodyId');
  }.property('bodyId')
});
