import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  items: {},
  choices: [],

  itemsChanged: function() {
    var self = this;
    this.set('choices', Ember.A());

    this.get('selected').then(function(selected) {
      self.get('items').then(function(items){    
        items.forEach(function(item){
          var label = item.get(self.get('labelPath'));
          var value = item.get(self.get('valuePath'));
          var initSelected;

          if (item === selected) {
            initSelected = "selected";
          }

          self.set('items.' + value, item);
          self.get('choices').addObject(Ember.Object.create({label: label, value: value, selected: initSelected}));
        });
      });      
    });
   }.observes('items').on('init'),

  change: function(e) {
    this.set('selected', this.get('items.' + e.target.value));
  }
});
