function rollDice(){

	// console.log("inside roll dice function");
	
	var money = Number(document.getElementById("firstBet").value);
	var maxMoney = 0; 
	// you dont want to place this variable inside the while  
	//  you need it to chang to the money var 

	while (money > 0){

			var roll1= Math.ceil(Math.random()*6);
			var roll2 = Math.ceil(Math.random()*6);
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
			// console.log(rollResults) 
			// what is the sum of roll1 and roll 2-- track of rolls before losing
			// console.log(money)
			// what were the earning each turn --win or lost
	if ( money > maxMoney ){
		maxMoney = money;
	 console.log(maxMoney);
	 //  outputs that max amount of money until the game is lost
	}
		document.getElementById("table").style.visibility = "visible";
		// display the ID in CSS labeled as Table once the while loop completes

		document.getElementById("intro").style.visibility = "hidden";
		}

}  
// the roll dice portion of the game

function letsPlay(){

	// console.log("Here in letsPlay")
	var initialBet = Number(document.getElementById("firstBet").value)
	if (initialBet <= 0 ){

		// console.log("Here in intialBet")
		alert("Please put amount greater than 0")
	} else if (initialBet >= 0){ 
		// console.log("bet looks good");
		rollDice();

	} else {

		// document.getElementById("table").style.visibility = "visible";

		
	}
 
}

