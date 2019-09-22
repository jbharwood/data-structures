class Stack {
  constructor() {
    this.stack = []
  }

  push(value) {
    this.stack.push(value)
  }

  pop() {
    this.stack.pop()
  }

  isEmpty() {
    if (this.stack.length === 0) {
      return true
    } else {
      return false
    }
  }

  size() {
    return this.stack.length
  }

  serialize() {
    return this.stack
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.serialize());
stack.push(3)
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.serialize());
stack.pop()
console.log(stack.serialize());
stack.pop()
stack.pop()
console.log(stack.serialize());
console.log(stack.isEmpty());
