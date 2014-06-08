var Graph = function(){
  this.nodeList = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  this.nodeList[newNode] = [];
  if(toNode !== undefined) {
    this.addEdge(newNode, toNode);
  }

  if(Object.getOwnPropertyNames(this.nodeList).length === 2) {
    for(var key in this.nodeList) {
      if(key !== newNode) {
        var otherNode = key;
      }
    }
    this.addEdge(newNode, otherNode);
  }


};

Graph.prototype.contains = function(node){
  if(node in this.nodeList) return true;
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodeList[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var result = false;
  var edgesArray = this.nodeList[fromNode];
  for(var i = 0; i < edgesArray.length; i++) {
    if(edgesArray[i] === toNode) {
      result = true;
    }
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodeList[fromNode].push(toNode);
  this.nodeList[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  var fromEdges = this.nodeList[fromNode];
  fromEdges.splice(fromEdges.indexOf(toNode), 1);

  var toEdges  = this.nodeList[toNode];
  toEdges.splice(toEdges.indexOf(fromNode), 1);

  if(fromEdges.length === 0) {
    this.removeNode(fromNode);
  }

  if(toEdges.length === 0) {
    this.removeNode(toNode);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
