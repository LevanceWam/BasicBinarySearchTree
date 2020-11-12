class Node{
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

/*********************** Private Members ********************************/

/*
* In ES6 we have a primitive type called symbol
* A symbol is a function we call to generate a symbol
* A symbol is essentially a unqiue indentifier everytime we call this function we get a new unqiue identifier.
* if we compare a symbol to a symbol we will get false because they are not the same 
* everytime we call a symbol function we get a new, unqiue value
* we can use this unqiue value as the property name for an object
* We are using these private members to follow the rules of abstraction.
*/

const PreOrderAlgorithm = Symbol();
const InOrderAlgorithm = Symbol();
const PostOrderAlgorithm = Symbol();
const heightAlgorithm = Symbol();
const minimumAlgorithm = Symbol();
const maximumAlgorithm = Symbol();
const equalsAlgorithm = Symbol();
const isBinaryAlgorithm = Symbol();
const kDistanceAlgorithm = Symbol();
const countLeavesAlgorithm = Symbol();
const isLeaf = Symbol();
const containsAlgorithm = Symbol();
const areSiblingAlgorithm = Symbol();
const getAncestorsAlgorithm = Symbol();

class Tree {
     constructor(root=null){
         this.root = root;
         this.size = 0;
     }

     /*********************** Public Methods ********************************/
     /*
        * These are the methods we want the user to interact with and use 
        * a lot of these methods will call on the private method to execute them and to get a result
        * we do this because we don't want to overwhelm the user and we want them to use the object 
        * as intended we want to make sure they use it correctly with out any issues.
     */

     insert(value){
         // Calling the node class to insert a new object with this value into the tree.
         // Incrementing the size of tree with the execution of this method
        let newNode = new Node(value);
        this.size++;
        
        // if the main root of this object is null set the root to the new object and stop the execution
         if(this.root == null){
             this.root = newNode;
             return;
         }

         let current = this.root;
         
         // To insert another node into this class we need to traverse the tree to find a empty child
         // so we are making a infinite loop so we can find a parent for the node 
         while (true) {
            // once the node meets the requirements to be given a parent
            // we are going to store it and break out of the loop
             if (value < current.value){
                 if (current.leftChild == null){
                     current.leftChild = newNode;
                     break;
                 }
                 current = current.leftChild;
             } else{
                if (current.rightChild == null){
                    current.rightChild = newNode;
                    break;
                }
                 current = current.rightChild;
             }
         }
     }

     // Like in the insert method we have to traverse the tree to find the value
     find(value){
         let current = this.root;

         // We are going to traverse the list until we hit the end
         while(current != null){
            // while we are traversing we are going to compare the value of the value we are searching for
             // if the value we are looking for less than the current value we are going to move done the left side of the tree
             // if greater we go to the right
             if(value < current.value) current = current.leftChild;
             else if (value > current.value) current = current.rightChild;
             // if either of the statements above do not execute then we found the value we are looking for.
             else return true;   
         }
         // if we make it here then the value we are looking for doesn't exist
         return false;
     }

     traversePreOrder(){
         // calling a recursive private method
         this[PreOrderAlgorithm](this.root);
     }

     traverseInOrder(){
         this[InOrderAlgorithm](this.root);
     }

     traversePostOrder(){
         this[PostOrderAlgorithm](this.root);
     }

     height(){
         if (this.root == null) return -1;
         return this[heightAlgorithm](this.root);
     }

     // this method runs in O(n) explained in minimumAlgorithm
     min(){
         return this[minimumAlgorithm](this.root);
     }

     max(){
         return this[maximumAlgorithm](this.root);
     }

     // this version of find the minimum value is made specific for binary trees
     // the run time for this method is O(log n) compared to the O(n)
     // here we are cutting the list in half because we know that the smaller values are in the left subtree

     minBinSearch(){
         if (this.root == null) throw new Error('The tree is empty');

         let current = this.root;
         let last = current ;

         // We are going to traverse the list until we hit null
         while (current != null){
             // we set last to current before we have it go on to the next node 
             // so when current hits null, last will be the final node
             last = current;
             current = current.leftChild;
         }
         return last.value;
     }

     // similar to the minBinSearch with a few changes
     maxBinSearch(){
         if (this.root == null) throw new Error('The tree is empty');

         let current = this.root;
         let last = current ;
         while (current != null){
             //instead of going to the left we are going to the right
             last = current;
             current = current.rightChild;
         }
         return last.value;
     }

     equals(other){
        if (other == null) return false;

        return this[equalsAlgorithm](this.root, other.root);
     }

     isBinary(){
        return this[isBinaryAlgorithm](this.root, Number.MIN_VALUE, Number.MAX_VALUE);
     }

     kDistance(distance){
        let list = [];
        this[kDistanceAlgorithm](this.root, distance, list);
        return list;
     }

     traverseLevelOrder(){
         //we are using a for loop to give us every node
        for(let i = 0; i <= this.height(); i++){
            let list = this.kDistance(i);
            for(let value of list){
                console.log(value)
            }
         }
     }

     getSize(){
         return this.size;
     }

     countLeaves(){
         return this[countLeavesAlgorithm](this.root,0);
     }

     contains(value){
         return this[containsAlgorithm](this.root, value);
     }

     areSiblings(first, second){
         return this[areSiblingAlgorithm](this.root, first, second);
     }

     getAncestors(value){
        let array = [];
        this[getAncestorsAlgorithm](this.root,value,array);
        console.log(array)
     }

     /*********************** Private Methods ********************************/
     /*
        * Here is the backbone to majority of the functions we are using above
        * we want to make sure that the user doesn't have access to this 
     */
     

     [PreOrderAlgorithm](root){
         //this is the base condition so the recursive function knows when to stop
        if (root == null) return;

         console.log(root.value);
         this[PreOrderAlgorithm](root.leftChild);
         this[PreOrderAlgorithm](root.rightChild);
     }

     [InOrderAlgorithm](root){
        if (root == null ) return;

        this[InOrderAlgorithm](root.leftChild);
        console.log(root.value);
        this[InOrderAlgorithm](root.rightChild);
     }

     [PostOrderAlgorithm](root){
        if (root == null ) return;

        this[PostOrderAlgorithm](root.leftChild);
        this[PostOrderAlgorithm](root.rightChild);
        console.log(root.value);
     }

     [heightAlgorithm](root){
         if (this[isLeaf](root)) return 0;
         return 1 + Math.max(this[heightAlgorithm](root.leftChild), this[heightAlgorithm](root.rightChild));
     }

     [minimumAlgorithm](root){
        if (this[isLeaf](root)) return root.value;

        let left = this[minimumAlgorithm](root.leftChild);
        let right = this[minimumAlgorithm](root.rightChild);

        return Math.min(Math.min(left, right), root.value);
     }

     [maximumAlgorithm](root){
        if (this[isLeaf](root)) return root.value;

        let left = this[maximumAlgorithm](root.leftChild);
        let right = this[maximumAlgorithm](root.rightChild);

        return Math.max(Math.max(left, right), root.value);
     }

     [equalsAlgorithm](first,second){
        if (first == null && second == null) return true;

        if(first != null && second != null) {
            return first.value == second.value
                && this[equalsAlgorithm](first.leftChild, second.leftChild)
                && this[equalsAlgorithm](first.rightChild, second.rightChild);
        }

        return false;
     }

     [countLeavesAlgorithm](root){
        if (root == null) return 0;
        if (root.leftChild == null && root.rightChild == null) return 1;
        
        return this[countLeavesAlgorithm](root.leftChild) + this[countLeavesAlgorithm](root.rightChild);
     }

     [containsAlgorithm](root, value){
         if (root == null) return false;
         
         if(root != null){
             return root.value == value
             || this[containsAlgorithm](root.leftChild,value)
             || this[containsAlgorithm](root.rightChild,value);
         }
     }

     [isBinaryAlgorithm](root, min, max){
        if (root == null) return true;

        if (root.value < min || root.value > max) return false;

        return this[isBinaryAlgorithm](root.leftChild, min, root.value - 1)
                && this[isBinaryAlgorithm](root.rightChild, root.value + 1, max);
     }

     [kDistanceAlgorithm](root, distance,list){
        if (root == null) return;
        if (distance == 0) {
            list.push(root.value);
            return;
        }

        this[kDistanceAlgorithm](root.leftChild, distance-1,list);
        this[kDistanceAlgorithm](root.rightChild, distance-1,list);
     }

     [areSiblingAlgorithm](root, first, second){
         if (root.leftChild == null && root.rightChild == null) return false;

         let left = root.leftChild.value;
         let right = root.rightChild.value;

         return first == left && second == right
         || this[areSiblingAlgorithm](root.leftChild, first, second)
         || this[areSiblingAlgorithm](root.rightChild, first, second);
     }

     [getAncestorsAlgorithm](root, value, array){
         if (root == null) return;
         if(!this.contains(value)) throw new Error('This number is not in the tree');

         while (root.value != null){
            if (value < root.value){
                array.push(root.value);
                this[getAncestorsAlgorithm](root.leftChild, value, array);
            }
            if (value > root.value){
                array.push(root.value);
                this[getAncestorsAlgorithm](root.rightChild, value, array);
            }
            return;
         }
     }

     [isLeaf](node){
         return (node.leftChild == null || node.rightChild == null);
     }
}   

module.exports = Tree;