/*

Binary Search Tree!

Name your class Tree.

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

There is a tree visualization helper. It will tell show you how your tree looks as you create it. In order
for this to work and for the unit tests to pass you, you must implement a Tree .toObject function that returns
your tree as a series of nested objects. Those nested objects must use the following names for their properties

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

As always, you can change describe to xdescribe to prevent the unit tests from running

*/

// A binary search tree is a tree data structure in which root node is less than or equal to left subtree and greater than 
// or equal to right subtree. The developer can use Binary Search Tree in the following use cases.
//
// Binary Search Trees are memory-efficient.
// Use when the data need to be sorted.
// Search can be done for a range of values.
// Height balancing helps to reduce the running time.

  // Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
 // @param {TreeNode} root
 // @return {number}
var findTilt = function (root) {
  let tilt = 0
  sum(root)
  return tilt

  function sum(n) {
    if (!n) return 0
    let l = sum(n.left), r = sum(n.right)
    tilt += Math.abs(l - r)
    return l + r + n.val
  }
};

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    }
    else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          // go left

          if (current.left) {
            current = current.left;
          }
          else {
            current.left = new Node(value);
            break;
          }
        }
        else {
          // go right
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }

  toJSON() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }

  toObject() {
    return this.root.serialize();
  }
}

class Node {
  constructor(value=null, left=null, right=null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  serialize() {
    const ans = { value: this.value };
    ans.left = this.left === null ? null : this.left.serialize();
    ans.right = this.right === null ? null : this.right.serialize();
    return ans;
  }
}

const nums = [8,3,10,1,6,4,7,14,13];
const tree = new Tree();
nums.map( num => tree.add(num));
// let tree = new Tree()
// tree.add(8)
// tree.add(3)
// tree.add(10)
// tree.add(1)
// tree.add(6)
// tree.add(4)
// tree.add(7)
// tree.add(14)
// tree.add(13)
// console.log(tree.toObject());
// console.log(tree.toJSON());
