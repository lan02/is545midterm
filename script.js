function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("Number 1").value;
    try { 
      if(x > 100)   throw "Invalid input, please try again.";
      if(x < 2)  throw "Invalid input, please try again.";
    }
    catch(err) {
      message.innerHTML = err;
    }
  }
  
  var message, y;
    message = document.getElementById("message");
    message.innerHTML = "";
    y = document.getElementById("Number 2").value;
    try { 
      if(x > 100)   throw "Invalid input, please try again.";
      if(x < 2)  throw "Invalid input, please try again.";
    }
    catch(err) {
      message.innerHTML = err;
    }
  }