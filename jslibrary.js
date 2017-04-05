filter_.filter(list, predicate, [context]) Alias: select
    // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }); => [2, 4, 6]