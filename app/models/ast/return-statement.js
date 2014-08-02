import Statement from './statement';

export default Statement.extend({
  isReturn : function() {
    return true;
  }.property()
});
