module.exports = function(app) {
  var store = require('../../store');

  var functionStore = store.create();
  var parameterStore = store.create();
  var blockStore = store.create();
  var statementStore = store.create();

  var f1 = { 
    name: "sayHello", 
    returnType: 3, 
    parameters: [1], 
    body: 1, 
    documentation: "This is the documentation for f1" 
  };

  var f2 = { 
    name: "f2", 
    returnType: 2, 
    body: 2,  
    documentation: "This is the docs for f2" 
  };

  functionStore.addObject(f1);
  functionStore.addObject(f2);

  parameterStore.addObject({name: "name", type: 3});
  parameterStore.addObject({name: "p2", type: 2});

  blockStore.addObject({statements: [{id: 1, type: 'ast/return-statement'}]});
  blockStore.addObject({});

  statementStore.addObject({text: "\"Hello \" + name"})

  var express = require('express');
  var astFunctionsRouter = express.Router();

  astFunctionsRouter.get('/', function(req, res) {
    res.send({ 
      "ast/functions": functionStore.getObjects(), 
      "ast/parameters" : parameterStore.getObjects(), 
      "ast/blocks" : blockStore.getObjects(), 
      "ast/return-statements" : statementStore.getObjects() 
    });
  });
  
  app.use('/api/ast/functions', astFunctionsRouter);
};
