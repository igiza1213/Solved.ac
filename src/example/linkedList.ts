export class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null;
  count: number;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.value;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
  }

  insetAt(index: number, value: number) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let newNode = new Node(value);

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head!;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next as Node;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }
}
