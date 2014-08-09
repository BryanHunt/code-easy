module.exports = function(app) {
  var store = require('../../store');
  var styles = store.create();
  var properties = store.create();

  var s1 = {
    selector: '.keyword-class',
    properties: [1]
  };

  var s2 = {
    selector: '.function-body',
    properties: [2]
  };

  styles.addObject(s1);
  styles.addObject(s2);

  var p1 = {
    name: "color",
    value: "red"
  };

  var p2 = {
    name: "margin-left",
    value: "25px"
  };

  properties.addObject(p1);
  properties.addObject(p2);

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
