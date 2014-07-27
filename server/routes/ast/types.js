module.exports = function(app) {
  var store = require('../../store').create();

  store.addObject({name: "int"});
  store.addObject({name: "boolean"});
  store.addObject({name: "String"});
  
  var express = require('express');
  var astTypesRouter = express.Router();

  astTypesRouter.get('/', function(req, res) {
    res.send({ "ast/types": store.getObjects() });
  });

  astTypesRouter.get("/:id", function(req, res) {
    res.send({ "ast/type": store.getObject(req.params.id) });
  });

  app.use('/api/ast/types', astTypesRouter);
};
