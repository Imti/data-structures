var makeStack = function() {
  var instanceOf = {};
  instanceOf  = Object.create(stackMethods);

  instanceOf.length = 0;
  instanceOf.storage = {};

  return instanceOf;

};

var stackMethods = {
  push:function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  pop:function(){
    if(this.length > 0) {
      this.length--;
      var result = this.storage[this.length];
      delete this.storage[this.length];
      return result;
    }
  },

  size:function(){
    return this.length;
  }
};


