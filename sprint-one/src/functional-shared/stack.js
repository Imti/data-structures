var makeStack = function() {
  var instanceOf = {};

  instanceOf.length = 0;
  instanceOf.storage = {};

  extend(instanceOf, stackMethods);
  console.log(instanceOf);
  return instanceOf;

};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
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


