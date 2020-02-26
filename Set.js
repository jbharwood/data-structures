// In this article, we would be discussing the Set object provided by ES6. A set is
// a collection of items which are unique i.e no element can be repeated. Set in ES6
// are ordered: elements of the set can be iterated in the insertion order. Set can
// store any types of values whether primitive or objects.



// it contains
// ["sumit","amit","anil","anish"]
var set1 = new Set(["sumit","sumit","amit","anil","anish"]);

// it contains 'f', 'o', 'd'
var set2 = new Set("fooooooood");

// it contains [10, 20, 30, 40]
var set3 = new Set([10, 20, 30, 30, 40, 40]);

 // it is an  empty set
var set4 = new Set();

set1.add(50);
console.log(set1);

console.log(set1.has(50));
set1.delete(50);
console.log(set1);
set1.forEach(a => {
  console.log(a);
})
set1.clear()
console.log(set1);
