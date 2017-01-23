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

function amountFor (rental) {
  var result = 0;
  //determine amounts for rental line
  switch (rental.getMovie().getPriceCode()) {
    case Movie.REGULAR:
      result += 2;
      if (rental.getDaysRented() > 2)
        result += (rental.getDaysRented() - 2) * 1.5;
      break;
    case Movie.NEW_RELEASE:
      result += rental.getDaysRented() * 3;
      break;
    case Movie.CHILDRENS:
      result += 1.5;
      if (rental.getDaysRented() > 3)
        result += (rental.getDaysRented() - 3) * 1.5;
      break;
  }
  return result;
}
Customer.prototype.statement = function () {
  var totalAmount = 0;
  var frequentRenterPoints = 0;
  var result = "Rental Record for " + this.getName() + "\n";
  for (var index in this._rentals) {
    var each = this._rentals[index];
    var thisAmount = amountFor(each);
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
