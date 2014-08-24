module.exports = function(app) {
  var store = require('../../store');
  var classes = store.create(8);

  var c1 = {
    name: "String",
    methods: []
  };

  classes.addObject(c1);

  var c2 = {
    name: "Hello",
    methods: [1, 2]
  };

  classes.addObject(c2);

  var express = require('express');
  var astClassesRouter = express.Router();

  astClassesRouter.get('/', function(req, res) {
    res.send({"ast/classes": classes.getObjects()});
  });
  
  astClassesRouter.post('/', function(req, res) {
    res.send({"ast/class": classes.addObject(req.body['ast/class'])});
  });

  app.use('/api/ast/classes', astClassesRouter);
};
