const Movie = require('./Movie');

function Customer (name) {
  this._name = name;
  this._rentals = [];
}

Customer.prototype.addRental = function (rental) {
  this._rentals.push(rental);
};

Customer.prototype.getName = function () {
  return this._name;
};

Customer.prototype.statement = function () {
  var totalAmount = 0;
  var frequentRenterPoints = 0;
  var result = "Rental Record for " + this.getName() + "\n";
  for (var index in this._rentals) {
    var each = this._rentals[index];
    var thisAmount = 0;
    //determine amounts for each line
    switch (each.getMovie().getPriceCode()) {
      case Movie.REGULAR:
        thisAmount += 2;
        if (each.getDaysRented() > 2)
          thisAmount += (each.getDaysRented() - 2) * 1.5;
        break;
      case Movie.NEW_RELEASE:
        thisAmount += each.getDaysRented() * 3;
        break;
      case Movie.CHILDRENS:
        thisAmount += 1.5;
        if (each.getDaysRented() > 3)
          thisAmount += (each.getDaysRented() - 3) * 1.5;
        break;
    }
    // add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if ((each.getMovie().getPriceCode() == Movie.NEW_RELEASE)
      &&
      each.getDaysRented() > 1) frequentRenterPoints++;
    //show figures for this rental
    result += "\t" + each.getMovie().getTitle() + "\t" + thisAmount + "\n";
    totalAmount += thisAmount;
  }
  //add footer lines result += "Amount
  result += "Amount owed is " + totalAmount + "\n";
  result += "You earned " + frequentRenterPoints + " frequent renter points";
  return result;
};
module.exports = Customer;
