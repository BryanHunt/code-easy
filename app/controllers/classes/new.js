import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newClass = this.store.createRecord('ast/class', {name: this.get('name')});
      newClass.save();
    }
  }
});
