import DS from 'ember-data';

export default DS.Model.extend({
  label: DS.attr('string'),
  selector: DS.attr('string'),
  properties: DS.hasMany('css/property')
});
