function myFunction() {
    var message, x, y;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("Number 1").value;
    y = document.getElementById("Number 2").value;
    try { 
      if(x > 100)   throw "Invalid input, please try again.";
      if(x < 2)  throw "Invalid input, please try again.";
      if(y > 100)   throw "Invalid input, please try again.";
      if(y < 2)  throw "Invalid input, please try again.";
    }
    catch(err) {
      message.innerHTML = err;
    }
  }
