//  an array of #s
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;
//  let ge the sum of these elements 

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++){
   //  we used a loop to find that sum

   //  use the Addition Operator to add the current elements value to the rolling sum
    sum += testArray[arrayPosition];
}
// asking for web browser to show the items in the array
//  and also that sum
console.log("The sum of " + testArray + " is " + sum);

/* objects: Loop through an array 
and get the sum of the elements of that array.*/