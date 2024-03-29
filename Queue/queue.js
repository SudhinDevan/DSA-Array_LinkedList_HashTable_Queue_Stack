class Queue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    isEmpty() {
        return this.items.length === 0
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items)
    }
}

let queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.print()
queue.dequeue()
queue.print()
queue.enqueue(40)
queue.print()
queue.dequeue()
queue.print()
