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