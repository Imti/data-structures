var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
  this.head = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length+this.head] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  if (this.length > 0){
    this.length--;
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
  }
  return result;
};

Queue.prototype.size = function(){
  return this.length;
};


