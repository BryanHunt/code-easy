module.exports = function(app) {
  var store = require('../../store');
  var styles = store.create();
  var properties = store.create();

  var s1 = {
    selector: '.function-body',
    properties: []
  };

  styles.addObject(s1);

  var express = require('express');
  var cssStylesRouter = express.Router();
  
  cssStylesRouter.get('/', function(req, res) {
    res.send({
      "css/styles": styles.getObjects(),
      "css/properties": properties.getObjects()
    });
  });

  app.use('/api/css/styles', cssStylesRouter);
};
