describe ("pingPong", function(){

  it("counts up from one to the number input by the user", function () {
    expect(pingPong(2)).to.eql([1, 2])
  });

  it("replaces multiples of 3 with ping", function () {
    expect(pingPong(4)).to.eql([1, 2, "ping", 4])
  });

  it("replaces multiples of 5 with pong", function (){
    expect(pingPong(5)).to.eql([1, 2, "ping", 4, "pong"])
  });

  it("replaces multiples of 15 with pingpong", function (){
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", 10, 11, "ping", 13, 14, "pingpong"])
  });

});
