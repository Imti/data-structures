var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if (arr === undefined){
    arr = [];
  }
  var subArray = [k,v];
  arr.push(subArray);
  this._storage.set(i, arr);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if (arr === null) return null;
  for (var j = 0; j < arr.length; j++){
    if (arr[j][0] === k){
      return arr[j][1];
    }
  }
  return false;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  for (var j = 0; j < arr.length; j++){
    if (arr[j][0] ===  k){
      arr[j][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
