function rollDice(){

	console.log("inside roll dice function");
	
	var money = Number(document.getElementById("firstBet").value)

	while (money > 0){

			var roll1= Math.floor(Math.random()*6);
			var roll2 = Math.floor(Math.random()*6);
			var rollResults = roll1 + roll2;
		/* keeping roll1 and roll2 inside while loop keep dice changing*/

			// console.log("Die #1:", roll1);
			// console.log("Die #2:", roll2);
			// tests my dice
			
			if (rollResults == 7){
			money = money + 4;

			} 

			else {

				money -= 1;
				// console.log("here in the while loop for rollDice");
			}

		}


}  
// the roll dice portion of the game

function letsPlay(){

	console.log("Here in letsPlay")
	var initialBet = Number(document.getElementById("firstBet").value)
	if (initialBet <= 0 ){

		// console.log("Here in intialBet")
		alert("Please put amount greater than 0")
	} else if (initialBet >= 0){ 
		console.log("bet looks good");
		rollDice();

	} else {
		
	}
		 
}

