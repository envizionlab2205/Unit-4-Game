$(document).ready(function(){

// Variables 

	var randomNumber = 0;
	var greenCrystal = 0;
	var yellowCrystal = 0;
	var blueCrystal = 0;
	var redCrystal = 0;

// Generate random number between 19 and 120
	
	function randomNumberGenerator() {
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
		console.log(randomNumber); 
		$("#random-number").html(randomNumber);
	}

// Generate random number between 1-12 and assign them to each gem

function randomGemValuesGenerator() {

greenCrystal = Math.floor(Math.random() * 12) + 1;
console.log("The Green Crystal's value is: " + greenCrystal);

redCrystal = Math.floor(Math.random() * 12) + 1;
console.log("The Red Crystal's value is: " + redCrystal);

yellowCrystal = Math.floor(Math.random() * 12) + 1;
console.log("The Yellow Crytal's value is: " + yellowCrystal);

blueCrystal = Math.floor(Math.random() * 12) + 1;
console.log("The Blue Crystal's value is: " + blueCrystal);
}
	
randomNumberGenerator();
randomGemValuesGenerator();
		
//Create a variable for the Total Score that will be updated

	var currentScore = 0;
	var wins = 0;
	var losses = 0;

// Everytime each crystal is clicked, add each crystal's value to the Total Score and display it

$("#greenCrystal").on("click", function() {
	currentScore = currentScore + greenCrystal;
	console.log(currentScore);
	$("#current-score").html(currentScore);

// When user wins, update wins, update message

if (currentScore === randomNumber) {
	wins = wins + 1;
	$("#wins").html("Wins: " + wins);
	$("#message").html("YOU WIN");
	console.log("YOU WIN");
					
// Reset Your Score, Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}

// When user loses, update losses, update message, reset Random Number and Gem Values

if (currentScore > randomNumber) {
	losses = losses + 1;
	$("#losses").html("Losses: " + losses);
	$("#message").html("YOU LOSE");
	console.log("YOU LOSE");
					
// Reset Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}
});

$("#redCrystal").on("click", function() {
currentScore = currentScore + redCrystal;
console.log(currentScore);
$("#current-score").html(currentScore);

// When user wins, update wins, update message

if (currentScore === randomNumber) {
	wins = wins + 1;
	$("#wins").html("Wins: " + wins);
	$("#message").html("YOU WIN");
	console.log("YOU WIN");

// Reset Your Score, Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}

// When user loses, update losses, update message, reset Random Number and Gem Values

if (currentScore > randomNumber) {
	losses = losses + 1;
	$("#losses").html("Losses: " + losses);
	$("#message").html("YOU LOSE");
	console.log("YOU LOSE");

// Reset Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}
});
		

$("#yellowCrystal").on("click", function() {
	currentScore = currentScore + yellowCrystal;
	console.log(currentScore);
	$("#current-score").html(currentScore);

// When user wins, update wins, update message

if (currentScore === randomNumber) {
	wins = wins + 1;
	$("#wins").html("Wins: " + wins);
	$("#message").html("YOU WIN");
	console.log("YOU WIN");

// Reset Your Score, Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}

// When user loses, update losses, update message, reset Random Number and Gem Values

if (currentScore > randomNumber) {
	losses = losses + 1;
	$("#losses").html("Losses: " + losses);
	$("#message").html("YOU LOSE");
	console.log("YOU LOSE");

// Reset Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}
});


$("#blueCrystal").on("click", function() {
	currentScore = currentScore + blueCrystal;
	console.log(currentScore);
	$("#current-score").html(currentScore);

// When user wins, update wins, update message

if (currentScore === randomNumber) {
	wins = wins + 1;
	$("#wins").html("Wins: " + wins);
	$("#message").html("YOU WIN");
	console.log("YOU WIN");
					
// Reset Your Score, Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}

// When user loses, update losses, update message, reset Random Number and Gem Values

if (currentScore > randomNumber) {
	losses = losses + 1;
	$("#losses").html("Losses: " + losses);
	$("#message").html("YOU LOSE");
	console.log("YOU LOSE");
					
// Reset Random Number and Gem Values

randomNumberGenerator();
randomGemValuesGenerator();
currentScore = 0;
$("#current-score").html(currentScore);
}
});

// Reset Game Stats - When the user clicks on the reset button, reset all game stats

$("#reset").on("click", function() {
	wins = 0;
	losses = 0;
	currentScore = 0;
	$("#wins").html("Wins: " + 0);
	$("#losses").html("Losses: " + 0);
	$("#current-score").html(currentScore);
	$("#message").html();
	randomNumberGenerator();
	randomGemValuesGenerator();
});
});