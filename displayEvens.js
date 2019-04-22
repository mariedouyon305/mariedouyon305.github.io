// var 

function displayEvens(){
	// console.log("Here in displayEvens");
	var num1 = document.getElementById("startNum").value;
	var num2 = document.getElementById("endNum").value;
	var step = document.getElementById("increments").value;


	for (var i = num1; i < num2; i += step);{
		console.log(i);
		 // if(i % 2 == 0){
		 // 	console.log(i);
		 // }

		 
		 	
	}
	// document.getElementById("startNum") 
	//console.log(i);
}