var testArray = [0,1,1,"1",3,"311"];

for (var arrayPosition = 0; arrayPosition <testArray.length -1; arrayPosition++){
  /* conditon states that arrayPosition is less than the length of the array and
  substract 1 from the length **move on to the next and add 1 */

  var currentElement = testArray[arrayPosition];
  //  new var created once the array position has been made

  var nextElement = testArray[arrayPosition + 1];
  // 2nd var does the same as currentElement but it adds 2

  console.log ("Testing " + currentElement + " and " + nextElement + 
  "(greater than): " + (currentElement > nextElement));

  if (currentElement == nextElement){

     console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): " + 
  (currentElement === nextElement));

     if (currentElement !== nextElement){
      consol.leog (currentElement + " is " + 
        typeof(currentElement));
      console.log(nextElement + " is " + typeof(nextElement));
     }
  } else {
     console.log("Testing " + currentElement + " and " + 
      nextElement + "(equal to): false");
  }


}