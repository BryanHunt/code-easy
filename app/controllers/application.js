import Ember from 'ember';

export default Ember.Controller.extend({
  tabsMeta: [
    Ember.Object.create({ title: "Experimental", linkTo: 'experimental'}),
  ]
});