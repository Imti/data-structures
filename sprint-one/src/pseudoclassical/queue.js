var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function(){
  if (this.length > 0){
    this.length--;
    var result = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage){
      var temp = this.storage[key];
      key = parseInt(key) - 1;
      this.storage[key] = temp;
    }
  }
  return result;
};

Queue.prototype.size = function(){
  return this.length;
};


