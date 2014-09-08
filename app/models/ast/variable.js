import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.belongsTo('ast/type', {async: true, polymorphic: true})
});
