var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if(list.tail === null) { // empty list
      list.tail = newNode; // add new node to list
      list.head = newNode; // add new node to list
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function(){
    if (list.tail !== null) { // not empty list
      var result = list.head.value;
      var temp = list.head.next;
      delete list.head;
      list.head = temp;
      return result;
    }
  };

  list.contains = function(target){
    if (list.head.value === target){
      return true;
    }
    while(list.head.next !== null){
      if(list.head.next.value === target){
        return true;
      } else {
        list.head.next = list.head.next.next;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
