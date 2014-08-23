import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  styles: Ember.computed.alias("controllers.application.model"),

  types: function(){
    var self = this;
    return this.store.find('ast/primitive').then(function(primitives) {
      return self.store.find('ast/class').then(function(classes) {
        return primitives.addObjects(classes);
      });
    });
  }.property(),

  actions: {
    applyStyles: function() {
      this.get('controllers.application').applyStyles();
    }
  }
});
