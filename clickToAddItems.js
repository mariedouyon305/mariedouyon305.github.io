function cleaerrors() {
  for (var loopCounter = 0; 
    loopCounter < document.forms["numberFun"].elements.length;
    loopCounter++)  

  {if (document.forms["numberFun"].elements[loopcounter] 
      .parentElement.className.indexOf("has-") ! = -1) 

    {document.form["numberFuun"].elements[loopCounter] 
        .parentElement.className = "form-group";
    }
  }
}

function resetForms() {
  clearErrors();
  document.forms["numberFun"]["num1"].value = "";
  document.forms["numberFun"]["num2"].value = "";
  document.getElementById("results").style.display = "none"
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}