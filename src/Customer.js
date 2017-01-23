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
Customer.prototype.getTotalCharge = function () {
  return this._rentals.reduce(function (sum, each) {
    sum += each.getCharge();
    return sum;
  }, 0);
};

Customer.prototype.getTotalFrequentRenterPoints = function () {
  return this._rentals.reduce(function (sum, each) {
    sum += each.getFrequentRenterPoints();
    return sum;
  }, 0);
};

Customer.prototype.statement = function () {

  var result = "Rental Record for " + this.getName() + "\n";
  for (var index in this._rentals) {
    var each = this._rentals[index];
    result += "\t" + each.getMovie().getTitle() + "\t" + each.getCharge() + "\n";
  }
  //add footer lines result += "Amount
  result += "Amount owed is " + this.getTotalCharge() + "\n";
  result += "You earned " + this.getTotalFrequentRenterPoints() + " frequent renter points";
  return result;
};
module.exports = Customer;
