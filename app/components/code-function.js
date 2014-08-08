import Ember from 'ember';

export default Ember.Component.extend({
  expandableElementId: function() {
    return this.get('function.name') + this.get('function.id');
  }.property('function.name'),

  expandableElementSelector: function() {
    return "#" + this.get('expandableElementId');
  }.property('expandableElementId')
});
