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

  function printPrime() {
    var i, j;

    i = document.getElementById('Number 1').value;
    j = document.getElementById('Number 2').value;

        //loop till i equals to $limit
     for (i = 2; i <= j; i++) {
        c = 0;

        for (j = 2; j <= i; j++) {
            // % modules will give the reminder value, so if the reminder is 0 then it is divisible
            if (i % j == 0) {
                //increment the value of c
                c++;
            }
        }

        //if the value of c is 2 then it is a prime number
        //because a prime number should be exactly divisible by 2 times only (itself and 1)
        if (c == 2) {
            document.getElementById("message").insertAdjacentHTML('beforeend', i + '<br>');
        }
    }
}

