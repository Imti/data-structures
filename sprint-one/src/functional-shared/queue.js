var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style
  var instanceOf = {};
  instanceOf.length = 0;
  instanceOf.storage = {};
  instanceOf.head = 0;
  extend(instanceOf, queueMethods);
  return instanceOf;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.length+this.head] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  if (this.length > 0){
    this.length--;
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

queueMethods.size = function(){
  return this.length;
}




