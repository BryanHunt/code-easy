module.exports = function(app) {
  var store = require('../../store');

  var functionStore = store.create();
  var parameterStore = store.create();
  var blockStore = store.create();
  var statementStore = store.create();
  var visibilityStore = store.create();

  var f1 = { 
    name: "sayHello", 
    returnType: { id: 8, type: "ast/class"}, 
    parameters: [1], 
    body: 1, 
    documentation: "Says hello to the person specified by name",
    visibility: 1
  };

  var f2 = { 
    name: "f2", 
    returnType: {id: 1, type: "ast/primitive"}, 
    body: 2,  
    documentation: "This is the docs for f2",
    visibility: 2
  };

  functionStore.addObject(f1);
  functionStore.addObject(f2);

  parameterStore.addObject({name: "name", type: {id: 8, type: "ast/class"}});
  parameterStore.addObject({name: "p2", type: {id: 1, type: "ast/primitive"}});

  blockStore.addObject({statements: [{id: 1, type: 'ast/return-statement'}]});
  blockStore.addObject({});

  statementStore.addObject({text: "\"Hello \" + name"});

  visibilityStore.addObject({name: "public"});
  visibilityStore.addObject({name: "protected"});
  visibilityStore.addObject({name: "private"});

  var express = require('express');
  var astMethodsRouter = express.Router();
  astMethodsRouter.get('/', function(req, res) {
    res.send({ 
      "ast/methods": functionStore.getObjects(), 
      "ast/parameters" : parameterStore.getObjects(), 
      "ast/blocks" : blockStore.getObjects(), 
      "ast/return-statements" : statementStore.getObjects(),
      "ast/visibilities" : visibilityStore.getObjects(),
    });
  });
  app.use('/api/ast/methods', astMethodsRouter);
};
