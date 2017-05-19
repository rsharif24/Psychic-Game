//generate random letter
//record the letter the player types
//record all guesses
//number of guesses go down by one after each wrong guess
//number of wins increases by one if player guesses correctly
//game repeats
//number of losses increases by one if player guesses wrong after 10 tries
//game repeats


	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var wins = 0;
	var losses = 0;
	var guesses = 10;

	var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

	function newNumber(){
		randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	function resetGame(){
		guesses = 10;
	}


	document.onkeypress = function(event){
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		

		if (userGuess === randomLetter) {
			wins ++;
			newNumber();
			resetGame();
		}
		else {
			guesses --;
		}

		if (guesses === 0) {
			losses ++;
			resetGame();
		}


		document.getElementById('userGuess').innerHTML+= userGuess + ",";
		document.getElementById('wins').innerHTML= wins;
		document.getElementById('losses').innerHTML= losses;
		document.getElementById('guesses').innerHTML= guesses;

	}


	