class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lengthOfList = 0;
    }

    getLength() {
        return this.lengthOfList;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    JSON() {
        return JSON.parse(JSON.stringify(this));
    }

    node(value) {
        return new LinkedListNode(value);
    }

    traverse(shouldReturnArray = true) {
        const listArray = [];
        let currentNode = this.head;
        while (currentNode) {
            if (shouldReturnArray) {
                listArray.push(currentNode.value);
            } else {
                console.log(currentNode.value);
            }
            currentNode = currentNode.next;
        }
        return shouldReturnArray ? listArray : undefined;
    }

    push(value) {
        const node = this.node(value);
        if (this.head) {
            this.tail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
        this.lengthOfList++;
        return this.lengthOfList;
    }

    unshift(value) {
        const node = this.node(value);
        if (this.head) {
            node.next = this.head;
        } else {
            this.tail = node;
        }
        this.head = node;
        this.lengthOfList++;
        return this.lengthOfList;
    }

    pop() {
        if (!this.head) return;

        let popValue = null;

        if (this.head === this.tail) {
            popValue = this.head.value;
            this.head = null;
            this.tail = null;
        } else {
            popValue = this.tail.value;
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.next === this.tail) {
                    currentNode.next = null;
                    this.tail = currentNode;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
        this.lengthOfList--;
        return popValue;
    }

    shift() {
        if (!this.head) return;

        const shiftValue = this.head.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.lengthOfList--;
        return shiftValue;
    }

    insert(position, value) {
        if (position >= this.lengthOfList) {
            this.push(value);
        } else if (position <= 0) {
            this.unshift(value);
        } else {
            let currentPosition = 0;
            let currentNode = this.head;

            while (currentNode && (currentPosition + 1) != position) {
                currentNode = currentNode.next;
                currentPosition++;
            }

            const nextNode = currentNode.next;
            const node = this.node(value);

            currentNode.next = node;
            node.next = nextNode;
            this.lengthOfList++;
        }
        return this.lengthOfList;
    }

    remove(position) {
        if (!this.head) return;

        if (position <= 0) {
            return this.shift();
        } else if (position >= this.lengthOfList - 1) {
            return this.pop();
        } else {
            let currentNode = this.head;
            let currentPosition = 0;

            while (currentNode.next && (currentPosition + 1) !== position) {
                currentNode = currentNode.next;
                currentPosition++;
            }

            let removedValue = currentNode.next.value;

            currentNode.next = currentNode.next.next;
            this.lengthOfList--;

            return removedValue;
        }
    }

    removeByValue(value, multiRemove = false) {
        if (!this.head) return;

        let isFound = false;
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode) {
            if (currentNode.value === value) {
                isFound = true;

                if (previousNode === null) {            // head condition
                    this.shift();
                    currentNode = this.head;
                    if (!multiRemove) return this.lengthOfList;
                    continue;
                } else if (currentNode.next === null) { // tail condition
                    this.pop();
                    return this.lengthOfList;
                } else {
                    previousNode.next = currentNode.next;
                    currentNode = currentNode.next;
                    this.lengthOfList--;
                    if (!multiRemove) return this.lengthOfList;
                    continue;
                }
            }

            if (multiRemove && isFound) return this.lengthOfList;

            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    reverse() {
        if (this.lengthOfList > 1) {
            let currentNode = this.head;
            let nextNode = currentNode.next;
            this.head.next = null;

            while (nextNode) {
                let nextToNextNode = nextNode.next;
                nextNode.next = currentNode;
                currentNode = nextNode;
                nextNode = nextToNextNode;
            }
            this.tail = this.head;
            this.head = currentNode;
        }
        return this;
    }

    getReverseValues() {
        const reverseArray = [];
        (function appendValuesInReverse(node) {
            if (node) {
                appendValuesInReverse(node.next);
                reverseArray.push(node.value);
            }
            return;
        })(this.head);
        return reverseArray;
    }

    sort(shouldReturn = false) {
        for (let currentNode = this.head; currentNode.next !== null; currentNode = currentNode.next) {
            for (let nextNode = currentNode.next; nextNode !== null; nextNode = nextNode.next) {
                if (currentNode.value > nextNode.value) {
                    let tempValue = currentNode.value;
                    currentNode.value = nextNode.value;
                    nextNode.value = tempValue;
                }
            }
        }
        return shouldReturn ? this : true;
    }

    isEqual(anotherLinkedList) {
        let currentNode = this.head;
        let anotherNode = anotherLinkedList.head;

        while (currentNode && anotherNode) {
            if (currentNode.value !== anotherNode.value) return false;
            currentNode = currentNode.next;
            anotherNode = anotherNode.next;
        }

        return (currentNode === null && anotherNode === null);
    }

    mergeList(anotherLinkedList) {
        this.tail.next = anotherLinkedList.head;
        this.lengthOfList += anotherLinkedList.lengthOfList;
        this.tail = anotherLinkedList.tail;
        return this.lengthOfList;
    }
}

module.exports = LinkedList;
