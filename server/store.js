var Store = function(startId) {
  return {
    nextId: startId ? startId : 1,
    data: {},

    getObject: function(id) {
      return this.data[id];
    },

    getObjects: function(ids) {
      var self = this;
      var items = new Array();

      if(ids)
        ids.forEach(function(id) {
          items.push(self.data[id]);
        });
      else
        for(var key in this.data)
          items.push(self.data[key]);

      return items;
    },

    addObject: function(object) {
      object['_id'] = this.nextId;
      this.data[this.nextId] = object;
      this.nextId++;
      return object;
    },

    removeObject: function(id) {
      delete this.data[id];
    },

    updateObject: function(object) {
      thid.data[object.id] = object;
    }
  };
};

module.exports = {
  create: function(startId) {
    return new Store(startId);
  }
};