"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _socket = _interopRequireDefault(require("socket.io"));

var _path = _interopRequireDefault(require("path"));

var _http = _interopRequireDefault(require("http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;

var server = _http["default"].createServer(app); // socket.io for omit or broadcast


var io = (0, _socket["default"])(server);
io.on("connection", function (socket) {
  console.log("new user connected");
  socket.on("disconnect", function () {
    console.log("disconnected from server");
  });
});

var viewPath = _path["default"].join(__dirname, '/../views');

var publicPath = _path["default"].join(__dirname, '/../public'); // set view engine


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
server.listen(port, function () {
  console.log("app started at port ".concat(port));
});