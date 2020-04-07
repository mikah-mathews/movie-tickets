// need a constructor for movie ticket (movieName --> movieType, age --> ageType, time --> timeRange)
// want prototype function for movie type (first release, normal release)
// want prototype function for determining age (regular price, senior price)
// want prototype function for time 
//Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

// Business Logic for Theatre Ticket

function TheatreTicket( ) {
  this.tickets = [];
  this.currentId = 0;
}



// Business logic for Ticket

function Ticket(movieInput, timeInput, ageInput) {
  this.movieInput = movieInput;
  this.timeInput = timeInput;
  this.ageInput = ageInput; 
}

Ticket.prototype.releaseType = function(t) {
  if(t === "king-kong") {
    return "firstRelease"
  } else if(t === "hausu") {
    return "regularRelease"
  } else if(t === "2001") {
    return "regularRelease"
  } else if(t === "nobody") {
    return "firstRelease"
  } else {
    console.log("there is an error in release type.")
  }
}

Ticket.prototype.priceType = function() {
  return this.regularPrice + " " + this.seniorPrice;
}
  

Ticket.prototype.timeType = function() {
  return this.matineeTime + " " + this.regularTime
}


  
$(doctype).ready(function() {
  $("form#ticketInput").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("#movieInput input[type='radio']:checked").val();
    var inputtedTime = $("#timeInput input[type='radio']:checked").val();
    var inputtedAge = $("input#age").val();
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    TheatreTicket.addTicket(newTicket);
    console.log("this is the something");
  

  

  });
  
});

