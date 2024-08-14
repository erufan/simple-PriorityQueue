class PriorityQueue {
  private array: number[] = [];

  enqueue(value: number) {
    this.array[this.array.length] = value;

    let index = this.findCorrectPosition(value);

    this.shiftingElements(index, value);
  }

  private findCorrectPosition(value: number) {
    for (let i = 0; i < this.array.length; i++) {
      if (value < this.array[i]) {
        return i;
      }
    }

    return this.array.length;
  }

  private shiftingElements(index: number, main: number): void {
    for (let i = index; i < this.array.length; i++) {
      let temp = this.array[i];
      this.array[i] = main;
      main = temp;
    }
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue(2);
priorityQueue.enqueue(1);
priorityQueue.enqueue(3);
priorityQueue.enqueue(25);
priorityQueue.enqueue(-21);
priorityQueue.enqueue(0);
priorityQueue.enqueue(23);
priorityQueue.enqueue(12);
priorityQueue.enqueue(-100);

console.log(priorityQueue);
