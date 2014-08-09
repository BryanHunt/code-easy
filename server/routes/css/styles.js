module.exports = function(app) {
  var store = require('../../store');
  var styles = store.create();
  var properties = store.create();

  var s1 = {
    label: 'Class Keyword',
    selector: '.keyword-class',
    properties: [1]
  };

  var s2 = {
    label: 'Parameter Type',
    selector: '.parameter-type',
    properties: [2]
  };

  var s3 = {
    label: 'Function Body',
    selector: '.function-body',
    properties: [3]
  };

  var s4 = {
    label: 'Return Keyword',
    selector: '.keyword-return',
    properties: [4]
  };

  styles.addObject(s1);
  styles.addObject(s2);
  styles.addObject(s3);
  styles.addObject(s4);

  var p1 = {
    name: "color",
    value: "red"
  };

  var p2 = {
    name: "color",
    value: "red"
  };

  var p3 = {
    name: "margin-left",
    value: "25px"
  };

  var p4 = {
    name: "color",
    value: "red"
  };

  properties.addObject(p1);
  properties.addObject(p2);
  properties.addObject(p3);
  properties.addObject(p4);

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
