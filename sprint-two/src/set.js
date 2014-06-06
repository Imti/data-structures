var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!(this.contains(item))){
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item){
  if (item in this._storage){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  if(this.contains(item)){
    var result = item;
    delete this._storage[item];
    return result;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
