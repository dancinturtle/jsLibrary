function map(list, callback) {
  if (typeof(callback) === "function"){
    var newArray = [];
    if (Array.isArray(list)){
      for(var idx in list){
        newArray.push(callback(list[idx]));
      }
    } else {
      for(var each in list){
        newArray.push(callback(list[each],each));
      }
    }
    return newArray;
  }
}

function reduce(list, callback, memo) {
  if (Array.isArray(list)){
    if (memo === undefined){
      memo = list[0]
      // console.log("memo undef")
    } else { memo = list[memo] }
    for (var i = 1; i < list.length; i++){
      memo = callback(memo,list[i]); // return list[0] + list[1] = 3
    }
  } else {
    for(var key in list){
      if(!memo){
      var memo = list[key];
      } else {
        memo = callback(memo,list[key]);
      }
    }
  }
  return memo;
}



var sum = reduce({one: 1, two: 2, three: 3}, function(memo, num){ return memo + num; });
console.log(sum);
// console.log(map([1,2,3],function(num){return num * 3;}));

// console.log(map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));

// console.log(map([[1, 2], [3, 4]], _.first));
