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
    // add frequent renter points
    frequentRenterPoints++;
    // add bonus for a two day new release rental
    if ((each.getMovie().getPriceCode() == Movie.NEW_RELEASE)
      &&
      each.getDaysRented() > 1) frequentRenterPoints++;
    //show figures for this rental
    result += "\t" + each.getMovie().getTitle() + "\t" + each.getCharge() + "\n";
    totalAmount += each.getCharge();
  }
  //add footer lines result += "Amount
  result += "Amount owed is " + totalAmount + "\n";
  result += "You earned " + frequentRenterPoints + " frequent renter points";
  return result;
};
module.exports = Customer;
