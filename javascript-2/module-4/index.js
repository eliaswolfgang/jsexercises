// Creating a stack using ES6

// Stacks have two essential functions: 'push' and 'pop'
// Because stacks are FIFO structures, when things are pushed to the stack, they are added on the top
// When things a popped from the stack, only the top thing will be accessed

console.log(`This is a stack built using ES6 class construction. Use stack.push('...') to push, stack.pop() to pop, stack.peek() to preview, and stack.count() to retrieve the number of elements in the stack.`)
const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, [])
    }

    push(i) {
        _items.get(this).push(i)
    }

    pop() {
        if (_items.get(this).length === 0) throw new Error('Stack is empty.');
        return _items.get(this).pop();
    }

    peek() {
        const items = _items.get(this);
        if (items.length === 0) throw new Error('Stack is empty.');
        return items[items.length - 1]
    }

    count() {
        return _items.get(this).length
    }
}

let stack = new Stack();