// need a constructor for movie ticket (movieName --> movieType, age --> ageType, time --> timeRange)
// want prototype function for movie type (first release, normal release)
// want prototype function for determining age (regular price, senior price)
// want prototype function for time (9:00-12:00, 13:00-17:00, 18:00-22:00)
//Your constructor and prototype could be called Ticket and you can come up with the formula for determining how the price is calculated depending on the input from the user.

// Business Logic for Theatre Ticket

function TheatreTicket( ) {
  this.tickets = [];
  this.currentId = 0;
}

// Business logic for Ticket

function Ticket(firstRelease, regularRelease, regularPrice, seniorPrice, matineeTime, regularTime) {
  this.firstRelease = firstRelease;
  this.regularRelease = regularRelease;
  this.regularPrice = regularPrice;
  this.seniorPrice = seniorPrice;
  this.matineeTime = matineeTime;
  this.regularTime = regularTime; 
}

Ticket.prototype.releaseType = function() {
  return this.firstRelease + " " + this.regularRelease;
}

Ticket.prototype.priceType = function()
  return this.regularPrice + " " + this.seniorPrice;

Ticket.prototype.timeType = function()
  return this.matineeTime + " " + this.regularTime




// function Movie(firstRelease, matinee, ) {
//   this.movieType = movieType;
//   this.ageType = ageType;
//   this.timeRange = timeRange;
// }

// Movie.prototype.movie = function() {
//   return this.movieType + " " + this.ageType 
// }

