import DS from 'ember-data';
import Statement from './statement'

export default Statement.extend({
  fullText: function() {
    return "return " + this.get('text');
  }.property('text')
});
