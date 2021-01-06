const {} = require('./array_lib')
//1 Task
// console.log([
//     { 'name': 'tony', 'age': 20 },
//     { 'name': 'feel', 'age': 30 }
// ].pluck('name'));
//
//3 Task
// console.log(['a', 'b', 'c', 'd', 'e', 'f'].splitArray(2));
//
//4 Task
// console.log([1, 0, 2, false, '', 3].clearArray()); // [1, 2, 3]
//
//5 Task
// console.log([1].concatArray(2, [3], [[4]]))
//6 Task
// console.log([1, 2, 3].rm()); // [2, 3]
// console.log([1, 2, 3].rm(2)); // [3]
// console.log([1, 2, 3].rm(5)); // []
// console.log([1, 2, 3].rm(0)); // [1, 2, 3]
//8 Task
// console.log([1, 2, 3].replaceIn('a')); // ['a', 'a', 'a']
// console.log([1, 2, 3].replaceIn(2)); // [2, 2, 2]
// console.log([4, 6, 8, 10].replaceIn('*', 1, 3)); // [4, '*', '*', 10]
//10 Task
// console.log([1,2,3,4,2,5,6,1,3].uni())
//11
// console.log(['a', 'b', 'c', 'd'].nfa(1))
// console.log(['a', 'b', 'c', 'd'].nfa(-2))
//13
// console.log([].group(['a', 'b', 3], [1, 2, 3], [true, false, 3]))
//14
// console.log(['a','b','c'].implode('-'))
//17
// console.log([1,2,3,4,5,6].rnd())
//18
// console.log([1, 2, 'a'].diff([1, 2, 3, 4, 'b']))
//20
// console.log([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7].fn())