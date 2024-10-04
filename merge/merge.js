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
      this.size++;
    } else {
      // tarea
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  toString () {
    // tarea
  }
}

const nodeTwo = new Node(2);
const nodeFive = new Node(5);


const linkedList = new LinkedList();

console.log(linkedList.isEmpty()); // true

linkedList.append(nodeTwo);
linkedList.append(nodeFive);

console.log(linkedList.isEmpty()); // false



















// class LinkedList {
//   constructor () {
//     this.size = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   /**
//    * append
//    * @description - Agrega un nodo al final de la lista.
//    * @param {Node} node - El nodo a agregar 
//    */
//   append(node) {

//   }

//   /**
//    * removeHead
//    * @description - Elimina el nodo head de la lista y lo regresa.
//    * @returns {Node} - El nodo que se quita de la lista.
//    */
//   removeHead() {

//   }

//   /**
//    * getSize
//    * @returns {number} - El tamaño de la lista.
//    */
//   getSize() {
//     return this.size;
//   } 
// }

// const nodeOne = new Node(2);
// const nodeTwo = new Node(3);
// const nodeThree = new Node(5);
// const nodeFour = new Node(8);

// const listA = new LinkedList();
// listA.append(nodeOne);
// listA.append(nodeTwo);
// listA.append(nodeThree);
// listA.append(nodeFour);

// console.log(listA.getSize());

