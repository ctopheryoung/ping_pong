var pingPong = function(input) {
  var output = [];

  for (var i = 1; i<= input; i++) {
    if (i % 3 === 0) {
      output.push("ping");
    } else if ( i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  };

  return output;
};
