import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newClass = this.store.createRecord('ast/class', {name: this.get('name')});
      var self = this;
      newClass.save().then(function(c) {
        self.transitionToRoute('class', c.get('id'));
      });
    },

    delete: function(c) {
      c.destroyRecord();
    }
  }
});
