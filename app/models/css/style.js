import DS from 'ember-data';

export default DS.Model.extend({
  selector: DS.attr('string'),
  properties: DS.hasMany('css/property')
});
