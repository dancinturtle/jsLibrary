var _ = {
    map: function(list, iteratee) {
        var result = [];
        for (var i = 0; i < list.length; i++) {
            result.push(iteratee(list[i]));
        }

        return result;
    },

    reduce: function(list, iteratee, memo) {
        if (memo === undefined) {
            memo = list[0];
        }

        for (var i = 0; i < list.length; i++) {
            memo = iteratee(memo, list[i]);
        }
        return memo;
    },

    find: function(list, predicate) {
        for (var i = 0; i < list.length; i++) {
            if (predicate(list[i])) {
                return list[i];
            }
        }
    },

    filter: function(arr, predicate) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (predicate(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reject: function() {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (!predicate(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
