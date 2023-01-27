function calculateSquareRoot() {
  var number = document.getElementById("number").value;
  var result = Math.sqrt(number);
  document.getElementById("result").value = result;
}

function calculateCubeRoot() {
  var number = document.getElementById("number").value;
  var result = Math.cbrt(number);
  document.getElementById("result").value = result;
}
