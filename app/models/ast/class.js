import DS from 'ember-data';
import Type from './type';

export default Type.extend({
  methods: DS.hasMany('ast/method', {async: true})
});
