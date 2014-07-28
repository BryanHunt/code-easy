import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  items: {},

  itemsChanged: function() {
    var self = this;
    this.set('choices', Ember.A());

    this.get('items').then(function(items){    
      items.forEach(function(item){
        var label = item.get(self.get('labelPath'));
        var value = item.get(self.get('valuePath'));
        self.set('items.' + value, item);
        self.get('choices').addObject(Ember.Object.create({label: label, value: value}));
      });
    });
  }.observes('items').on('init'),

  change: function(e) {
    this.set('selected', this.get('items.' + e.target.value));
  }
});
