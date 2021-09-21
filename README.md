# @geekyorion/DSAlib

![npm (scoped)](https://img.shields.io/npm/v/@geekyorion/dsa) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@geekyorion/dsa) [![GitHub issues](https://img.shields.io/github/issues/geekyorion/dsalib)](https://github.com/geekyorion/dsalib/issues) [![GitHub license](https://img.shields.io/github/license/geekyorion/dsalib)](https://github.com/geekyorion/dsalib/blob/master/LICENSE)

A data structure library which implements linkedlist, tree, etc

## DSA Status
- [x] LinkedList
    - [x] Singly LinkedList
    - [ ] Dobuly LinkedList
- [ ] Tree
- [ ] Stack
- [ ] Graph

## basic usage

### installation
To install the library please use the following command
```sh
npm i --save @geekyorion/dsa
```

### creating instances
```javascript
const LinkedList = require('@geekyorion/dsa').LinkedList;

// use the LinkedList to create a new list
const list = new LinkedList();
```

OR
```javascript
const DSA = require('@geekyorion/dsa');
// here DSA is an object which has implemeneted Data structure within

// to create a new LinkedList
const list = new DSA.LinkedList();
```

### 1. LinkedList

#### Class Prototype
```javascript
// properties
list.head: null | LinkedListNode
list.tail: null | LinkedListNode
list.lengthOfList: number

// method list
list.getHead(): LinkedListNode;
list.getTail(): LinkedListNode;
list.getLength(): number;
list.JSON(): JSON;
list.push(value: any): number;
list.unshift(value: any): number;
list.pop(): LinkedListNode.value;
list.shift(): LinkedListNode.value;
list.traverse(shouldReturnArray?: boolean): Array<LinkedListNode.value> | undefined;
list.insert(position: number, value: any): number;
list.remove(position: number): LinkedListNode.value;
list.removeByValue(value: LinkedListNode.value, multiRemove?: boolean): number;
list.reverse(): list;
list.getReversedValue(): Array<LinkedListNode.value>;
list.sort(shouldReturn?: boolean): list | true;
list.isEqual(anotherLinkedList: LinkedList): boolean;
list.merge(anotherLinkedList: LinkedList): number;
list.node(value: any): LinkedListNode;
```

#### Properties
```javascript
const list = new LinkedList();

// get head pointer of the list
list.getHead();
// or
list.head;

// get tail pointer of the list
list.getTail();
// or
list.tail;

// get the number of nodes in the list
list.getLength();
// or
list.lengthOfList;

// All these properties can be used to generate the JSON for the list
// so to get the JSON for the list (with above properties)
list.JSON();
/*
example list: [1, 2, 3]
output:
{
    head: {
        value : 1, next: {
            value: 2, next: { value: 3, next: null }
        }
    },
    tail: {
        value: 3,
        next: null
    },
    lengthOfList: 3
}
*/
```

#### Available methods
- __```push(value)```__: adds a new value in the list at the last position (after the tail)
    ```javascript
    list.push(1);       // return value: 1
    list.push('a');     // return value: 2
    // returns the new size of the list
    // list: [1, 'a']
    ```

- __```unshift(value)```__: adds a new value in the list at starting position (before the head)
    ```javascript
    list.unshift(1);       // return value: 1
    list.unshift('a');     // return value: 2
    // returns the new size of the list
    // list: ['a', 1];
    ```

- __```pop()```__: removes the last value (from the tail)
    ```javascript
    // list: [1, 2, 3, 4]
    const value = list.pop();
    // value: 4; returns the popped value
    // list: [1, 2, 3];
    ```

- __```shift()```__: removes the starting value (from the head)
    ```javascript
    // list: [1, 2, 3, 4]
    const value = list.shift();
    // value: 1; returns the popped value
    // list: [2, 3, 4];
    ```

- __```traverse(shouldReturnArray?)```__: traverse the linkedlist
    - ```shouldReturnArray```: optional; default is ```true```
        - ```true```: returns the array of the list values
        - ```false```: console the list items
    ```javascript
    // list: [1, 2, 3, 4]
    const arrayItems = list.traverse();
    // arrayItems: [1, 2, 3, 4]; 
    
    list.traverse(false);
    // console output:
    /*
    1
    2
    3
    4
    */
    ```

- __```insert(position, value)```__: insert a value at particular position (zero based index)
    ```javascript
    // list: [1, 2, 4, 5]
    list.insert(2, 3);     // return value: 5
    // returns the new size of the list
    // list: [1, 2, 3, 4, 5];
    ```

- __```remove(position)```__: remove a value from particular position (zero based index)
    ```javascript
    // list: [1, 2, 3, 4, 5]
    const removedValue = list.remove(2);
    // removedValue: 3; returns the removed value
    // list: [1, 2, 4, 5];
    ```

- __```removeByValue(value, multiRemove?)```__: removes the given value from list
    - ```multiRemove```: optioanl; default is ```false```
        - ```true```: remove all the matches
        - ```false```: remove only the first match
    ```javascript
    // list: [1, 2, 2, 2, 5]
    list.remove(2);         // returns 4; returns the new length of the list
    // output: [1, 2, 2, 5]
    list.remove(2, true);   // returns 2
    // output: [1, 5]
    ```

- __```reverse()```__: reverse the list (modifies the original list)
    ```javascript
    // list: [1, 2, 3, 4, 5]
    list.reverse();     // returns the pointer to the current list
    // output: [5, 4, 3, 2, 1]
    ```

- __```getReversedValue()```__: returns the array of list value in reversed order (doesn't modify the original list)
    ```javascript
    // list: [1, 2, 3, 4, 5]
    const reverseValueArray = list.getReversedValue();     // returns the array
    // reverseValueArray: [5, 4, 3, 2, 1]
    // but the list is still the same
    ```

- __```sort(shouldReturn?)```__: sort the list
    - ```shouldReturn```: optional; default is ```false```
        - ```true```: returns the pointer to the current list (sorted)
        - ```false```: return 'true' in case of successful sort
    ```javascript
    // list: [3, 5, 1, 2, 4]
    list.sort();     // returns true
    // output: [1, 2, 3, 4, 5]
    ```

- __```isEqual(anotherLinkedList)```__: checks whether list is equal with provided list or not
    - ```anotherLinkedList```: an another instance of the LinkedList class
    ```javascript
    // list: [1, 2, 3]
    // anotherList: [1, 2, 3]
    let isEqual = list.isEqual(anotherList);
    // isEqual: true
    list.push(4);
    isEqual = list.isEqual(anotherList);
    // isEqual: false
    ```

- __```merge(anotherLinkedList)```__: merge the another linkedlist
    - ```anotherLinkedList```: an another instance of the LinkedList class
    ```javascript
    // list: [1, 2, 3]
    // anotherList: [4, 5]
    list.merge(anotherList);        // returns 5; returns the new length of the list
    // list: [1, 2, 3, 4, 5]
    ```

- __```node(value)```__: returns the node with the provided value which can be used to create the new list path from any node
    ```javascript
    // list: [1, 2, 4]
    const node = list.node(3);
    list.insert(2, node);
    console.log(list.JSON());
    /*
    {
        head: {
            value: 1, next: {
                value: 2, next: {
                    value: { value: 3, next: null },
                    next: { value: 4, next: null }
                }
            }
        },
        tail: { value: 4, next: null },
        lengthOfList: 4
    }
    */
    ```
