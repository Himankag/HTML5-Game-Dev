var targetNumber;
var guessCount;

function init() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("guess").value = "";
  document.getElementById("chances").innerHTML = "You have 7 chances";
  document.getElementById("playAgain").style.display = "none";
}

function guessNumber() {
  var guess = document.getElementById("guess").value;
  var result = document.getElementById("result");
  var chances = document.getElementById("chances");

  if (guess == targetNumber) {
result.innerHTML = "Congratulations! You guessed the number in " + guessCount + " tries.";
chances.innerHTML = "";
document.getElementById("playAgain").style.display = "block";
} else if (guessCount >= 7) {
result.innerHTML = "Sorry, you were unable to guess the number in 7 tries. The number was " + targetNumber + ".";
chances.innerHTML = "";
document.getElementById("playAgain").style.display = "block";
} else {
if(guess>targetNumber){
if(guess - targetNumber > 20)
result.innerHTML = "Your guess is very high";
else if(guess - targetNumber >10)
result.innerHTML = "Your guess is high";
else
result.innerHTML = "Your guess is a bit high";
}else{
if(targetNumber - guess > 20)
result.innerHTML = "Your guess is very low";
else if(targetNumber - guess >10)
result.innerHTML = "Your guess is low";
else
result.innerHTML = "Your guess is a bit low";
}
chances.innerHTML = "You have " + (7 - guessCount) + " chances left.";
guessCount++;
}
}

init();
