module.exports = function(app) {
  var store = require('../../store');
  var classes = store.create();

  var c1 = {
    name: "Hello",
    methods: [1, 2]
  };

  classes.addObject(c1);

  var express = require('express');
  var astClassesRouter = express.Router();
  astClassesRouter.get('/', function(req, res) {
    res.send({"ast/classes": classes.getObjects()});
  });
  app.use('/api/ast/classes', astClassesRouter);
};
