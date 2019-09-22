/*
  ArrayList

  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):

  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
  constructor() {
    this.length = 0
    this.data = {}
  }
  push(value) {
    this.data[this.length] = value
    this.length++
  }
  pop() {
    const ans = this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--
    return ans
  }
  get(index) {
    return this.data[index]
  }
  delete(index) {
    const ans = this.data[index]
    this._collapseTo(index)
    return ans
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
  }
  serialize() {
    return this.data
  }
}

let list = new ArrayList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list.get(1))
console.log(list.serialize())
list.pop()
console.log(list.serialize())
list.delete(0)
console.log(list.serialize())



//
//
// let chai = require('chai')
//
// var expect = chai.assert
// // unit tests
// // do not modify the below code
// describe('ArrayList', function() {
//   const range = length => Array.apply(null, {length: length}).map(Number.call, Number)
//   const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) )
//   let list
//
//   beforeEach( () => {
//     list = new ArrayList()
//   })
//
//   it('push', () => {
//     abcRange(26).map( character => list.push(character) )
//     expect(list.length).to.equal(26)
//   })
//
//   it('pop', () => {
//     abcRange(13).map( character => list.push(character) )
//     expect(list.length).to.equal(13)
//     range(10).map( () => list.pop() )
//     expect(list.length).to.equal(3)
//     expect(list.pop()).to.equal('c')
//   })
//
//   it('get', () => {
//     list.push('first')
//     expect(list.get(0)).to.equal('first')
//     list.push('second')
//     expect(list.get(1)).to.equal('second')
//     expect(list.get(0)).to.equal('first')
//     abcRange(26).map( character => list.push(character))
//     expect(list.get(27)).to.equal('z')
//     expect(list.get(0)).to.equal('first')
//     expect(list.get(9)).to.equal('h')
//     list.pop()
//     expect(list.get(list.length-1)).to.equal('y')
//   })
//
//   it('delete', () => {
//     abcRange(26).map( character => list.push(character) )
//     list.delete(13)
//     expect(list.length).to.equal(25)
//     expect(list.get(12)).to.equal('m')
//     expect(list.get(13)).to.equal('o')
//     list.delete(0)
//     expect(list.length).to.equal(24)
//     expect(list.get(0)).to.equal('b')
//   })
//
// })
