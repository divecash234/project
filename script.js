// Set the date we're counting down to
var countDownDate = new Date("March 2, 2024 00:02:00").getTime();

//Update the countdown every 1 second
var x = setInterval(function() {
     var now = new Date().getTime();
     var distance = countDownDate - now;

     //Calculation for days, hours ,minuties, and seconds
     var days = Math.floor(distance/(1000*60*60*24));
     var hours = Math.floor(distance%(1000*60*60*24))/(1000*60*60);
     var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
     var seconds = Math.floor((distance%(1000*60))/1000);

     //Display the  countdown
     document.getElementById("days").innerHTML = days;
     document.getElementById("hours").innerHTML =hours
     document.getElementById("minutes").innerHTML =minutes;
     document.getElementById("seconds").innerHTML =seconds;

     //If the countdown is over, display a message
     if (distance < 0){
          clearInterval(x);
          document.getElementById("timer").innerHTML= "EXPIRED";
     }
}, 1000);