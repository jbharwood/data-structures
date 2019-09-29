const preorderTraverse = (node, array) => {
  if (!node) return array;
  array.push(node.value);
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);
  return array;
};

const inorderTraverse = (node, array) => {
  if (!node) return array;
  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);
  return array;
};

const postorderTraverse = (node, array) => {
  if (!node) return array;
  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
};

const minNode = (node) => {
   if(!node){
      return 0;
   }
   if(node.left){
     return minNode(node.left)
  }
  return node.value
}

const maxNode = (node) => {
   if(!node){
     return 0;
  }
  if(node.right){
     return maxNode(node.right)
  }
  return node.value;
}

const contains = (node, value) => {
  if (!node) {
    return false
  }
  if (node.value === value) {
    return true
  }
  else if (value < node.value) {
    return contains(node.left, value)
  }
  else {
    return contains(node.right, value)
  }
}



const factorial = (n) => {
    if (n === 1) {
      console.log("n: " + n);
      return 1
    }
    else {
      console.log("n: " + n);
      return n * factorial(n-1)
    }
}

console.log(factorial(5));
console.log(factorial(1));

const tree = {
    "value": 8,
    "left": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": {
                "value": 4,
                "left": null,
                "right": null
            },
            "right": {
                "value": 7,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 10,
        "left": null,
        "right": {
            "value": 14,
            "left": {
                "value": 13,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}
console.log(preorderTraverse(tree, []));
console.log(inorderTraverse(tree, []));
console.log(postorderTraverse(tree, []));
console.log(minNode(tree));
console.log(maxNode(tree));
console.log(contains(tree, 10));
console.log(contains(tree, 99999));
