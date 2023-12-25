alert("Let's find out how compatible you and your partner are");

var yourName = prompt("What is your name?");
var hisherName = prompt("What is your partner's name?");
var n = Math.random();

n = n * 100;
n = Math.floor(n) + 1;

if (n > 80){
alert(yourName + " and " + hisherName + " are " + n + " % compatible." + "Great Chance for lasting love!");
}
  else {
alert(yourName + " and " + hisherName + " are " + n + " % compatible.");
  }
