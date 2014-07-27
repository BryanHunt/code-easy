module.exports = function(app) {
  var functionStore = require('../../store').create();

  functionStore.addObject({ name: "sayHello", returnType: 3, parameters: [1], body: "return \"Hello \" + name", documentation: "This is the documentation for f1" });
  functionStore.addObject({ name: "f2", returnType: 2, body: "This is the f2 body",  documentation: "This is the docs for f2" })

  var parameterStore = require('../../store').create();

  parameterStore.addObject({name: "name", type: 3});
  parameterStore.addObject({name: "p2", type: 2});

  var express = require('express');
  var astFunctionsRouter = express.Router();

  astFunctionsRouter.get('/', function(req, res) {
    res.send({ "ast/functions": functionStore.getObjects(), "ast/parameters" : parameterStore.getObjects() });
  });
  
  app.use('/api/ast/functions', astFunctionsRouter);
};
