var _ = {
	each: function(arr, callback) {
		for(var i = 0; i < arr.length; i++) {
			callback(arr[i]);
		}
	},

	map: function(arr, callback) {
		var res = [];
		_.each(arr, function (elem) {
			res.push(callback(elem));
		});
		return res;
	},

	reduce: function(arr, callback, memo) {
		_.each(arr, function (elem) {
			if (!memo) {
				memo = elem;
			} else {
				memo = callback(memo, elem);
			}
		});
		return memo;
	},

	find: function(arr, callback) {
		_.each(arr, function(elem) {
			if (callback(elem)) {
				return elem;
			}
		});
	},

	filter: function(arr, callback) {
		var res = [];
		_.each(arr, function(elem) {
			if (callback(elem)) {
				res.push(elem)
			}
		});
		return res;
	},

	reject: function(arr, callback) {
		var res = [];
		_.each(arr, function(elem) {
			if (!callback(elem)) {
				res.push(elem);
			}
		})
		return res;
	}
};

//worked on by Le Lin