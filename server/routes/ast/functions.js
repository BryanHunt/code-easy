module.exports = function(app) {
  var express = require('express');
  var astFunctionsRouter = express.Router();
  astFunctionsRouter.get('/', function(req, res) {
    res.send({"ast/functions":[{id: 1, name: "f1", returnType: 1}, {id: 2, name: "f2", returnType: 2}]});
  });
  app.use('/api/ast/functions', astFunctionsRouter);
};
