# Basic Binary Tree

> A javascript implementation of a [Binary Tree](https://www.geeksforgeeks.org/binary-search-tree-data-structure/) data structure.

## Description

A tree is a data structure that stores elements in a hierarchy these element are referred to as nodes and the lines that connect them as edges. Each node contains a value or data. We can have trees full of intergers or object. We can have personal objects in a tree these objects would be a part of an organization or a family. The top node in the tree is called the root. The root has 2 children and the root is the parent of these nodes. These nodes also have 2 children each if the nodes on the bottom of of the tree these are known as leaf nodes.

In binary trees a root can have up to 2 children. A node with out any children is called a leaf. the height of a leaf node is 0 as we go up in the tree the height increases. The height of a tree is the height of the root node which is the longest path to the leaf. The depth of a root node is 0 as we go down this number increases. The depth of a node is more accurately the number of edges from the root to the node.

A binary search tree is a special kind of binary tree in which all the values in the left subtree is less than the root and the right subtree is greater than the root. The left and right subtree each must also be a binary search tree.

We have a couple of different algorithms for travesing binary trees this algorithm falls into 2 catergories. Breadth First which is also known as level order traversal. Then we have Depth first we have 3 depth first algorithms Pre-order, In-order, and Post-order. The different between these algorithms is in the order in which we visit the root node along with the right and left subtrees.

---

## Basic Usage

Install using npm:

```bash
npm install basic-binarytree --save
```

```javascript
const Tree = require('basic-binarytree');
const tree = new Tree();

tree.insert(7);
// --> Inserts 7 as the main root of the Tree

tree.insert(4);
// --> Inserts 4 as a child on the left side of the main root because is is less than the main root. This creates the left subtree.

tree.insert(9);
// --> Inserts 9 as a child on the right side of the main root because is is greater than the main root. This creates the right subtree.

tree.find(4);
// --> true

tree.traversePreOrder();
// --> prints 7, 4, 9

/*
in preorder all we did was print the root and moved on to the left subtree and printed its root. We went to the left again and printed that node then made our way to the right. After this subtree is done we went to the main root and repeated the same process for the right subtree
*/

tree.traverseInOrder();
// --> prints 4, 7, 9

/*
This is the same concept as the method above expect this one prints in this order left, root, right. So with this algorithm we are going to start from the farest left node and traverse from that left node it's root then to the right node.
*/

tree.traversePostOrder();
// --> prints 4, 9, 7

/*
This is the same concept as the method above expect this one prints in this order left, right, root
*/

tree.height();
// --> This returns 1


```
