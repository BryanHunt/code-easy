import Ember from 'ember';

export default Ember.Controller.extend({
  types: function(){
    return this.store.find('ast/type');
  }.property()
});
