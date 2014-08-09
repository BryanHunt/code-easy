import Ember from 'ember';
import uuid from '../utils/uuid';

export default Ember.Mixin.create({
  expandableElementId: function() {
    return uuid();
  }.property(),

  expandableElementSelector: function() {
    return "#" + this.get('expandableElementId');
  }.property('expandableElementId')
});
