import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  parameters: DS.hasMany('ast/parameter'),
  returnType: DS.belongsTo('ast/type', {async: true, polymorphic: true}),
  body: DS.belongsTo('ast/block', {async: true}),
  documentation: DS.attr()
});
