var _ = {
    map: function(arr, callback){
        var newArr = [];
        if(typeof(callback)==="function"){
            for(var i = 0; i < arr.length; i++){
                newArr.push(callback(arr[i]));
            }
            return newArr;
        }
    },
    reduce: function(arr,callback,memo){
        if(typeof(callback) === "function"){
            if(memo == undefined){var start = 1; memo = arr[0]}
            else{var start = 0}
            for(var i = start; i < arr.length; i++){
                memo = callback(memo, arr[i]);
            }
        }
        return memo;
    },
    find: function(arr,val){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] === val){
                return true;
            }
        }
        return false;
    },
    filter: function(arr,truthtest){
        var passed = [];
        for(var i = 0; i < arr.length; i++){
            if(truthtest(arr[i])){
                passed.push(arr[i]);
            }
        }
        return passed;
    },
    reject: function(arr,truthtest){
        var rejects = [];
        for(var i = 0; i < arr.length; i++){
            if(!truthtest(arr[i])){
                rejects.push(arr[i]);
            }
        }
        return rejects;
    }
}
console.log(_.map([1,2,3,4,5],function(num){return num*5}))
console.log(_.reduce([1,2,3,4],function(memo, num){return memo+num;}));
console.log(_.reject([1,2,3,4,5],function(num){return num % 2 == 0;}))
console.log(_.filter([1,2,3,4,5],function(num){return num % 2 == 0;}))
console.log(_.find([1,2,3,4,5],1))
console.log(_.find([1,2,3,4,5],6))
