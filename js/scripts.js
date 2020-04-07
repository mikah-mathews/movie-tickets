// TODO
// get radio button ID to compare for IF statements
// make function to calculate prices

// Business Logic for Theatre Ticket



function TheatreTicket( ) {
  this.tickets = [];
  this.currentId = 0;
}

TheatreTicket.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

TheatreTicket.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

// User Interface Logic

var theatreTicket = new TheatreTicket();




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
    console.log("there is an error in release type.");
  }
}

Ticket.prototype.timeType = function(t) {
  if(t === "matinee") {
    return "matineeRelease";
  } else if(t === "regularRelease") {
    return "regularRelease";
  } else {
    console.log("there is an error in timeType.");
  }
}; 

// Ticket.prototype.timeType = function() {
//   return this.matineeTime + " " + this.regularTime
// }




  
$(document).ready(function() {
  $("form#ticketInput").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("#movieInput input[type='radio']:checked").val();
    var inputtedTime = $("#timeInput input[type='radio']:checked").val();
    var inputtedAge = $("input#age").val();
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    console.log(newTicket);
    theatreTicket.addTicket(newTicket);
    console.log("this is the something");
  


  });
});

