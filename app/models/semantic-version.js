import DS from 'ember-data';

export default DS.Model.extend({
  majorVersion: DS.attr('number'),
  minorVersion: DS.attr('number'),
  maintVersion: DS.attr('number'),

  fullVersion: function() {
    return this.get('majorVersion') + "." + this.get('minorVersion') + "." + this.get('maintVersion');
  }.property('majorVersion', 'minorVersion', 'maintVersion')
});
