/*! sic 0.1.0 Copyright (c) 2013 Alan Plum. MIT licensed. @preserve */
define(function(require, exports, module) {
module.exports = sic;

function sic(value) {
  return function() {
    return value;
  };
}
return module.exports;});