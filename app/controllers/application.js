import Ember from 'ember';

export default Ember.Controller.extend({
  tabsMeta: [
    Ember.Object.create({ title: "Classes", linkTo: 'classes'}),
    Ember.Object.create({ title: "Experimental", linkTo: 'experimental'}),
  ],


  applyStyles: function() {
    this.get('model').forEach(function(style) {
      var styleDescriptor = {};
      style.get('properties').forEach(function(property){
        styleDescriptor[property.get('name')] = property.get('value');
      });

      window.console.log(styleDescriptor);

      vein.inject(style.get('selector'), styleDescriptor);
    });
  }
});