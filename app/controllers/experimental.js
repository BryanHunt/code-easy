import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'application',
  styles: Ember.computed.alias("controllers.application.model"),

  types: function(){
    return this.store.find('ast/type');
  }.property(),

  actions: {
    applyStyles: function() {
      this.get('controllers.application').applyStyles();
    }
  }
});
