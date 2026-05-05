class Counter {
    static count: number = 0

    increment() {
        //  return this.count = this.count + 1
         return Counter.count = Counter.count + 1
    }
    decrement() {
        return Counter.count -= 1
    }
}

const counter1 = new Counter()
console.log(counter1);

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
const counter2 = new Counter()

console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());


