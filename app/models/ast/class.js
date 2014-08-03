import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  methods: DS.hasMany('ast/method')
});
