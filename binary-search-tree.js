class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.val > val) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val);
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (currentNode.val < val) {
        if (currentNode.right === null) {
          currentNode.right = new Node(val);
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (currentNode.val > val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, currentNode.left);
      }
    } else if (currentNode.val < val) {
      if (currentNode.right === null) {
        currentNode.right = new Node(val);
        return this;
      } else {
        return this.insertRecursively(val, currentNode.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root.val === val) {
      return this.root;
    }
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (currentNode.val === val) {
      return currentNode;
    }

    if (currentNode.val > val) {
      if (currentNode.left === null) return undefined;
      return this.findRecursively(val, currentNode.left);
    } else if (currentNode.val < val) {
      if (currentNode.right === null) return undefined;
      return this.findRecursively(val, currentNode.right);
    }

    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let currentNode = this.root;

    function traverse(currentNode) {
      data.push(currentNode.val); // visit
      currentNode.left && traverse(currentNode.left); // go left if there's a left
      currentNode.right && traverse(currentNode.right); // go right if there's a right
    }

    traverse(currentNode);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let currentNode = this.root;

    function traverse(currentNode) {
      currentNode.left && traverse(currentNode.left); // go left if there's a left
      data.push(currentNode.val); // visit
      currentNode.right && traverse(currentNode.right); // go right if there's a right
    }

    traverse(currentNode);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let currentNode = this.root;

    function traverse(currentNode) {
      currentNode.left && traverse(currentNode.left); // go left if there's a left
      currentNode.right && traverse(currentNode.right); // go right if there's a right
      data.push(currentNode.val); // visit
    }

    traverse(currentNode);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root;
    let queue = [];
    let data = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      data.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
