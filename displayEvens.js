
function displayEvens(){
	// console.log("Here in displayEvens");
	var num1 = Number(document.getElementById("startNum").value);
	var num2 = Number(document.getElementById("endNum").value);
	var step = Number(document.getElementById("increments").value);

	document.getElementById("message").innerText = "Here are the even numbers between "+num1+ " and "+num2+
	" by "+step+"'s:";
	for (var i = num1; i <= num2; i += step){
		
		if(i % 2 == 0){
		 	console.log(i);
		 	document.getElementById("results").innerText += i+"\n";
		}

		if(isNaN(num1) || isNaN(num2) || isNaN(step)){
			alert("please only input numbers");
		} 

		if(num1 < 0 || num2 < 0 || step < 0 ){
			alert("Please input numbers above 0");
		}

		if(num2 <= num1){
			alert("your Ending number cannot be less than or eqaul to Starting number Tray again");
		}
	}
}