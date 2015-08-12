var _hex = {}

var _factory = require('./app/factory.js');
var _convert = require('./app/convert.js')(_factory);
var _neighbors = require('./app/neighbors.js')(_factory, _convert);
var _distance = require('./app/distance.js')(_factory, _convert);
var _round = require('./app/round.js')(_factory, _convert);

_hex.factory = _factory;
_hex.convert = _convert;
_hex.neighbors = _neighbors;
_hex.distance = _distance;
_hex.round = _round;

module.exports = _hex;
