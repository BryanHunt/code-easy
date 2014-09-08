import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.belongsTo('ast/type', {async: true, polymorphic: true})
});
