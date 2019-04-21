//  an array of #s
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;
//  let ge the sum of these elements 

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++){
   //  we used a loop to find that sum

   //  use the Addition Operator to add the surrent elements valus to the rolling sum
    sum += testArray[arrayPosition];
}
console.log("The sum of " + testArray + " is " + sum);