// DECLARE GLOBAL VARIABLES

// Declaring the variables for the game (hold the running score, wins & losses)
var totalScore = 0;
var wins = 0;
var losses = 0;

// FUNCTIONS

// Random number generator
function randomNumberFromRange(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
	};

function newGame () {
	var targetNumber = randomNumberFromRange(19, 120);
	totalScore = 0;
	$("#total-score").html(totalScore);
	console.log(targetNumber);
	$("#target-number").html(targetNumber);

	// create an array of 4 random numbers between 1 & 12 to use when we are assigning attributes to the images
	var numberOptions = [];
	for (i = 0; i < 4; i++) {
	numberOptions.push(randomNumberFromRange(1, 12))
	};

	// Check Crystal Number assigned
	console.log(numberOptions[0]);
	console.log(numberOptions[1]);
	console.log(numberOptions[2]);
	console.log(numberOptions[3]);
	console.log(numberOptions.length);
	$("#crystals").html('');
	for (var i = 0; i < numberOptions.length; i++) {

		// For each iteration, create an imageCrystal
	    var imageCrystal = $("<img>");

	    // Each crystal receives the class ".crystal-image" so they are all the same size.
	    imageCrystal.addClass("crystal-image");

	    // Each imageCrystal will be given a src link to the crystal image in the assets folder
	    imageCrystal.attr("src", "assets/images/Gem"+i+".png");

	    // Each imageCrystal will be given a data attribute called data-crystalValue from the random number array.
	    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

	    // Lastly, each crystal image (with all it classes and attributes) will be rendered to the page.
	    $("#crystals").append(imageCrystal);
	};

 	// Universal click function for all crystals.
 	$(".crystal-image").on("click", function() {

	    // Pull value from data attribute of the clicked crystal and convert into an interger (vs. string from the attribut).    
	    var crystalValue = ($(this).attr("data-crystalvalue"));
	    crystalValue = parseInt(crystalValue);
	    var targetNumber = parseInt($("#target-number").text());
	    // Eacg time a crystal is clicked, add the value to the score.
	    totalScore += crystalValue;

	    // Update the Total score value for the user to see
	    console.log(totalScore);
		$("#total-score").html(totalScore);

		if (totalScore > targetNumber) {

			losses++;
			console.log(losses);
			$("#loss-counter").html(losses);
			newGame();

		} else if (totalScore === targetNumber) {

			wins++;
			console.log(wins);
			$("#win-counter").html(wins);
			newGame();

		// I feel like I need this, but I don't know why!!  So I'm leaving it empty
		} else {

		};

	});

};

// PROCESSES
newGame ();