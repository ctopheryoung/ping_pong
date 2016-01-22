var pingPong = function(input) {
  var output = [];
  for (var i = 1; i<= input; i++) {
    if (i % 15 === 0) {
      output.push("pingpong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if ( i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  };
  return output;
};

function write_letters(numberOutput){
    var items = document.getElementById("itemList");
    for (var i = 0; i < numberOutput.length; i++ ) {
        var item = document.createElement("li");
        item.innerHTML = numberOutput[i];
        items.appendChild(item);
    };
    return;
};

$(document).ready(function() {
  debugger;
  $("form#userInput").submit(function(event) {
    var input = parseInt($("input#countTo").val());
    var numberOutput = pingPong(input);

    $(".finalResult").text(numberOutput);

    event.preventDefault();
  });
});
