var _ = {
   map: function(list, callback) {
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
   },
   reduce: function(list, callback, memo) {
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

   },
   find: function() {
     // code here;
   },
   filter: function() {
     // code here;
   },
   reject: function() {
     // code here;
   }
 }
