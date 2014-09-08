import DS from 'ember-data';

export default DS.Model.extend({
  functionCalled: DS.belongsTo('ast/function', {async: true, polymorphic: true}),
  arguments: DS.hasMany('ast/argument')
});
