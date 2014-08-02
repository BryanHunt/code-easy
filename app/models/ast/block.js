import DS from 'ember-data';

export default DS.Model.extend({
  statements: DS.hasMany('ast/statement', {polymorphic: true})
});
