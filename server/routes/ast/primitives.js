module.exports = function(app) {
  var store = require('../../store').create();

  store.addObject({name: "boolean"});
  store.addObject({name: "byte"});
  store.addObject({name: "char"});
  store.addObject({name: "int"});
  store.addObject({name: "long"});
  store.addObject({name: "float"});
  store.addObject({name: "double"});

  var express = require('express');
  var astPrimitivesRouter = express.Router();

  astPrimitivesRouter.get('/', function(req, res) {
    res.send({ "ast/primitives":store.getObjects() });
  });
  app.use('/api/ast/primitives', astPrimitivesRouter);
};
