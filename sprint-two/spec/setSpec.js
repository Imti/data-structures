describe('set', function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should not include methods in the instance', function() {
    expect(set.hasOwnProperty('add')).to.equal(false);
    expect(set.hasOwnProperty('contains')).to.equal(false);
    expect(set.hasOwnProperty('remove')).to.equal(false);
  });

  it('should be an object, not an array', function() {
    expect(Array.isArray(set)).to.not.equal(true);
    expect(typeof set).to.equal('object');
  });

  it('should not contain duplicates', function() {
    set.add('4');
    set.add('4');
    set.remove('4');
    expect(set.contains('4')).to.equal(false);
  });



});
