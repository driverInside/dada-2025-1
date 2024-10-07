class Node {
  constructor (value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  getSize() {
    return this.size;
  }

  append(node) {
    if (this.size === 0) {
      // la lista está vacía.
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  isEmpty() {
    return this.size === 0;
  }

  toString () {
    if (this.size === 0) {
      return "empty";
    }

    let current = this.head;
    let str = '';

    while (current != null) {
      str = str + current.value + " -> ";
      current = current.next;
    }

    return str;
  }

  pop () {
    const current = this.head;

    this.head = this.head.next;
    this.size--;

    return current;
  }
}

// Nodos lista A
const nodeTwo = new Node(2);
const nodeFive = new Node(5);
const nodeEigth = new Node(8);
const nodeTen = new Node(10);
// Nodos lista B
const nodeThree = new Node(3);
const nodeFour = new Node(4);
const nodeNine = new Node(9);
const nodeEleven = new Node(11);
const nodeTwelve = new Node(12);

const linkedListA = new LinkedList();
const linkedListB = new LinkedList();

linkedListA.append(nodeTwo);
linkedListA.append(nodeFive);
linkedListA.append(nodeEigth);
linkedListA.append(nodeTen);

linkedListB.append(nodeThree);
linkedListB.append(nodeFour);
linkedListB.append(nodeNine);
linkedListB.append(nodeEleven);
linkedListB.append(nodeTwelve);

console.log(linkedListA.getSize());  // 4
console.log(linkedListB.getSize());  // 5;
console.log(linkedListB.getSize());  // 5;

console.log(linkedListA.toString());
console.log(linkedListB.toString());

function merge(listA, listB) {
  const listC = new LinkedList();

  while (!listA.isEmpty() && !listB.isEmpty()) {
    if (listA.head.value < listB.head.value) {
      const current = listA.pop();
      listC.append(current);
    } else {
      const current = listB.pop();
      listC.append(current);
    }
  }

  const otherList = listA.isEmpty()? listB: listA;

  while (!otherList.isEmpty()) {
    const current = otherList.pop();
    listC.append(current);
  }
  
  return listC;
}


const linkedListC = merge(linkedListA, linkedListB);

console.log(linkedListC.toString()); // 2 - 3 - 4- 5- 8- 9- 10- 11- 12


