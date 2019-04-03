"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ejs from "ejs";
var path = require('path');

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
var viewPath = path.join(__dirname, '/../views');
var publicPath = path.join(__dirname, '/../public'); // set view engine

app.set('view engine', 'ejs');
app.set('views', viewPath); // public files

app.use(_express["default"]["static"](publicPath)); // bodyParser
// parse application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // parse application/json for form behaviour

app.use(_bodyParser["default"].json({
  type: function type(req) {
    return req.get('content-type').indexOf('multipart/form-data') !== 0;
  }
}));
app.get('/', function (req, res) {
  res.render("index");
});
app.listen(port, function () {
  console.log("app started at port ".concat(port));
});