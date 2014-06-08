var makeBinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

makeBinarySearchTree.prototype.insert = function(value) {

  var recursiveInsert = function(node) {
    if (value < node.value){
      if(node.left === null) {
        node.left = new makeBinarySearchTree(value);
      } else {
        recursiveInsert(node.left);
      }
    } else if (value > node.value){
      if(node.right === null) {
        node.right = new makeBinarySearchTree(value);
      } else {
        recursiveInsert(node.right);
      }
    }
  };
  recursiveInsert(this);
};

makeBinarySearchTree.prototype.contains = function(target) {
  var result = false;
  var recursiveSearch = function(node){
    if (node.value === target) result = true;
    if (target < node.value && node.left !== null){
      recursiveSearch(node.left);
    } else if (target > node.value && node.right !== null){
      recursiveSearch(node.right);
    }
  };
  recursiveSearch(this);
  return result;
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback) {
  var deeplySearch = function(node){
    callback(node.value);
    if (node.left !== null){
      deeplySearch(node.left);
    }
    if (node.right !== null){
      deeplySearch(node.right);
    }
  };
  deeplySearch(this);
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
