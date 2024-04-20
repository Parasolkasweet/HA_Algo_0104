// class Stack {
//     constructor() {
//         this.items = [];
//         this.minStack = []; // Стек для хранения минимальных элементов
//     }

//     push(element) {
//         this.items.push(element);
//         if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
//             this.minStack.push(element);
//         }
//     }

//     pop() {
//         if (this.items.length === 0) {
//             return "Underflow";
//         }
//         const poppedItem = this.items.pop();
//         if (poppedItem === this.minStack[this.minStack.length - 1]) {
//             this.minStack.pop();
//         }
//         return poppedItem;
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     getMin() {
//         if (this.minStack.length === 0) {
//             return "Stack is empty";
//         }
//         return this.minStack[this.minStack.length - 1];
//     }
// }

// const specialStack = new Stack();
// specialStack.push(3);
// specialStack.push(5);
// specialStack.push(2);
// specialStack.push(1);
// console.log(specialStack.getMin()); // Output: 1
// specialStack.pop();
// console.log(specialStack.getMin()); // Output: 2
//===========
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getMax() {
        if (this.items.length === 0) {
            return "Queue is empty";
        }
        return Math.max(...this.items);
    }
}

const specialQueue = new Queue();
specialQueue.enqueue(3);
specialQueue.enqueue(5);
specialQueue.enqueue(2);
specialQueue.enqueue(1);
console.log(specialQueue.getMax()); // Output: 5
specialQueue.dequeue();
console.log(specialQueue.getMax()); // Output: 5