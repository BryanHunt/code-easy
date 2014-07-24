module.exports = function(app) {
  var express = require('express');
  var astTypesRouter = express.Router();
  astTypesRouter.get('/', function(req, res) {
    res.send({"ast/types":[{id: 1, name: "int"}, {id: 2, name: "boolean"}]});
  });
  astTypesRouter.get("/:id", function(req, res) {
    if(req.params.id == 1)
      res.send({"ast/type": {id: 1, name: "int"}});
    else
      res.send({"ast/type": {id: 2, name: "boolean"}});
  });
  app.use('/api/ast/types', astTypesRouter);
};
