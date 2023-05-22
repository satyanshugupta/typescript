class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}
const nameQueue = new Queue<string>();
nameQueue.add("Hello");

console.log(nameQueue);

const numberQueue = new Queue<number>();
numberQueue.add(55);

console.log(numberQueue);
