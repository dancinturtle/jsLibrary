// Sam Moon & Alan Le


var _ = {
  map: function(arr, func) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++){
      new_arr.push(func(arr[i]));
    }
  },
  reduce: function(arr, func, memo) {
    for (var i = 0; i < arr.length; i++) {
      memo = func(arr[i], memo);
    }
    return memo;
  },
  find: function(arr, func) {
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i])){
        return arr[i];
      }
    }
    return false;
  },
  filter: function(arr, func) {
    var new_arr == [];
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i])){
        new_arr.push(arr[i]);
      }
    }
    if (new_arr){
      return new_arr;
    }
    else {
      return false;
    }
  },
  reject: function(arr, func) {
    var new_arr == [];
    for (var i = 0; i < arr.length; i++) {
      if (!func(arr[i])){
        new_arr.push(arr[i]);
      }
    }
    if (new_arr){
      return new_arr;
    }
    else {
      return false;
    }
  }
}
