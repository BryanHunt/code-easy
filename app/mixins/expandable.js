import Ember from 'ember';

export default Ember.Mixin.create({
  expandableElementSelector: function() {
    return "#" + this.get('expandableElementId');
  }.property('expandableElementId')
});
