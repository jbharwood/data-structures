/*

  A HashTableSet!

  Name your class/newable-function HashTableSet.

  With a set, you want to put in a value to check later if it's in the collection.
  You are going to watch a sufficiently large array to assure you don't have collisions. I did 255
  to start with. When added, use a hashing function to hash the string and put in your table.
  The class should have three functions:

  add -   function - takes a string as an input, hashes it, and puts in its table
  check - function - takes a string and returns true if it exists in its table otherwise returns false
  hash -  function - takes a string and a max number and return a number between 0 and the max number
                     function must be idempotent the same string and max number will always yield the
                     same output
*/

// Hash table is a data structure used to implement an associative array, a structure that can map keys to values. 
// The developer can use Hash table in the following use cases.
//
// Constant time operation.
// Inserts are generally slow, reads are faster than trees.
// Hashing is used so that searching a database can be done more efficiently.
// Internet routers use hash tables to route the data from one computer to another.
// Internet search engine uses hash function effectively.

class HashTable {
  constructor() {
    this.table = new Array(255)
  }
  add(input) {
    this.table[this.hash(input, 255)] = input
  }
  check(input) {
    return !!this.table[this.hash(input, 255)]
  }
  hash(input, max) {
    let num = 0
    for (let i = 0; i < input.length; i++) {
      num += input.charCodeAt(i) * i
    }
    return num % max
  }
}

let hash = new HashTable
hash.add("bob")
hash.add("susan")
hash.add("steve")
console.log(hash.check("bob"))
console.log(hash.check("beth"))
