var num1 = Math.round(Math.random()*20);
var num2 = Math.round(Math.random()*20);
var num3 = Math.round(Math.random()*20);

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("num3").innerHTML = num3;

if ((num1 > num3 && num1 == num2) || (num1 > num2 && num1 == num3) || (num1 > num2 && num1 > num3)) {
    document.getElementById("most").innerHTML += " monday to wednesday";
    if (num1 > num3 && num1 == num2) {
        document.getElementById("most").innerHTML += " and thursday to friday";
    }
    if (num1 > num2 && num1 == num3) {
        document.getElementById("most").innerHTML += " and saturday to sunday";
    }
    var most = num1;
    document.getElementById("most").innerHTML += " (" + num1 + ").";
}
if (num2 > num1 && num2 > num3) {
    document.getElementById("most").innerHTML += " thursday to friday (" + num2 + ").";
    var most = num2;
}
if ((num3 > num1 && num3 == num2) || (num3 > num2 && num3 > num1)) {
    document.getElementById("most").innerHTML += " saturday to sunday";
    if (num3 > num1 && num3 == num2) {
        document.getElementById("most").innerHTML += " and thursday to friday";
    }
    var most = num3;
    document.getElementById("most").innerHTML += " (" + num3 + ").";
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("letter").innerHTML += alphabet.charAt(num1);
document.getElementById("time").innerHTML += (num2*num3) + " mins or " + Math.floor(num2*num3/60) + "hr "+ (num2*num3%60) + "mins";