// ALLEN AND HARRISON

var _ = {
	map: function(arr, func) {
		var new_arr = [];
		for (var i = 0; i < arr.length; i++) {
			new_arr.push(func(arr[i]));
		}
		return new_arr;
	},

	reduce: function(arr, func, memo) {
		for (var i = 0; i < arr.length; i++){
			memo = func(arr[i], memo);
		}
		return memo;
	}

	find: function(arr, func) {
		for (var i = 0; i < arr.length; i++){
			if (func(arr[i]) == true){
				return arr[i];
			}
		}
		return false;
	}

	filter: function() {
		var arr_new = [];
		for (var i = 0; i < arr.length; i++) {
			if (func(arr[i])){
				arr_new.push(arr[i]);
			}
		}
		return arr_new;
	}

	reject: function() {
		var arr_new = [];
		for (var i = 0; i < arr.length; i++) {
			if (!func(arr[i])){
				arr_new.push(arr[i]);
			}
		}
		return arr_new;
	}
}



