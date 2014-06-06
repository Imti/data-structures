var makeQueue = function() {
  var instanceOf = {};
  instanceOf = Object.create(queueMethods);

  instanceOf.length = 0;
  instanceOf.storage = {};
  instanceOf.head = 0;

  return instanceOf;

};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.length+this.head] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  if(this.length > 0) {
    this.length--;
    var results = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return results;
  }
};

