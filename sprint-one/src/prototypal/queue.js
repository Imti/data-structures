var makeQueue = function() {
  var instanceOf = {};
  instanceOf = Object.create(queueMethods);

  instanceOf.length = 0;
  instanceOf.storage = {};

  return instanceOf;

};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  if(this.length > 0) {
    this.length--;
    var results = this.storage[0];
    delete this.storage[0];
    for(var key in this.storage) {
      var temp = this.storage[key];
      key = parseInt(key) - 1;
      this.storage[key] = temp;
    }
    return results;
  }
};

