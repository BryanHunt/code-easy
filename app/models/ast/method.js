import DS from 'ember-data';
import Function from './function';

export default Function.extend({
  visibility: DS.belongsTo('ast/visibility')
});
