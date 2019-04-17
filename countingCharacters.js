
// var stringToCount = "Hello";
function countingCharacters(stringToCount){
	console.log(stringToCount + " has " 
		+ stringToCount.length + " characters.");
}

countingCharacters("Strawberries");
// this also touches base on Arrays 
function countingCharacter2(stringToCount,characterToFind){
//lets count the # of times a chara. appears in a string
//We'll look at each character 1-by-1 with the help of a Loop
 var characterCount = 0;
 for (var characterPosition = 0; characterPosition <
 	 stringToCount.length; characterPosition++) {
 // search for the letter in the character - in this ex. its "t"
 	if (stringToCount[characterPosition] == characterToFind){
 		characterCount++;
 // shows the number of times "t" shows up in the variable "Strawberries"
 // case sensitive unable to distinguish "T" from "t"		
 	}

 }

 console.log("String to search in: " + stringToCount);
 console.log("Character to find " + characterToFind);
 console.log("Number of times the character appears " + characterCount);

}