'use strict';

var strain = {
  keep: function(array, f) {
    var arr = []
    array.forEach(function(item) {
      if (f(item)) {
        arr.push(item);
      }
    })
    return arr;
  },
  discard: function(array, f) {
    var arr = []
    array.forEach(function(item) {
      if (!f(item)) {
        arr.push(item);
      }
    })
    return arr;
  },
};
