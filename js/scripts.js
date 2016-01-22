var pingPong = function(input) {
  var output = [];
  for (var i = 1; i<= input; i++) {
    if (i % 3 === 0) {
      output.push("ping");
    } else {
      output.push(i);
    }
  };
  return output;
};
