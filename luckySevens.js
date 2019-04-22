/*function rollDice(){
	var money = Number(document.getElementById("firstBet").value)
	var roll1 = Number(Math.floor(Math.random()*6));
	var roll2 = Number(Math.floor(Math.random()*6));

	while (money > 0){

			var rollResults= roll1 + roll2;
			
			if (rollResults == 7){
			money = money + 4;

			} 

			else {

				money -= 1;
			}

		}


}  /* the roll dice portion of the game */

function letsPlay(){

	var intialBet = Number(document.getElementByID("firstBet").value)
	if (intialBet <= 0 ){
		alert("Please try again")
	}

}