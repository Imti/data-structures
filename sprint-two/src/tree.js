var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  extend(newTree, treeMethods);
  //console.log(newTree);
  return newTree;
};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
  return to;
}


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var search = function(node){
    for (var i = 0; i < node.children.length; i++){
      if (node.children[i].value === target){
        result = true;
      } else {
        search(node.children[i]);
      }
    }
  };
  search(this);
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
