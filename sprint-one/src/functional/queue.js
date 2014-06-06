var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size+head] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size > 0) {
      size--;
      var result = storage[head];
      delete storage[head];
      head++;
      return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
