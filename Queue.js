class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    let removed = this.queue[0]
    this.queue.shift()
    return removed
  }

  peek() {
    return this.queue[0]
  }

  empty() {
    if (this.queue.length === 0) {
        return true
    } else {
        return false
    }
  }

  serialize() {
    return this.queue
  }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.serialize());
console.log(queue.peek());
console.log(queue.empty());
queue.dequeue()
console.log(queue.serialize());
queue.dequeue()
queue.dequeue()
console.log(queue.serialize());
console.log(queue.empty());
