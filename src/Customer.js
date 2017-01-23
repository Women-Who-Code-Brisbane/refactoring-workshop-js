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
  result += "Amount owed is " + this.getTotalCharge() + "\n";
  result += "You earned " + this.getTotalFrequentRenterPoints() + " frequent renter points";
  return result;
};

Customer.prototype.htmlStatement = function(){
  var result = "<h1>Rental Record for " + this.getName() + "</h1>";
  result += "<table>";

  for (var index in this._rentals) {
    var each = this._rentals[index];
    result += "<tr><td>" + each.getMovie().getTitle() + "</td><td>" + each.getCharge() + "</td></tr>";
  }

  result += "<tr><td colspan='2'>Amount owed is " + this.getTotalCharge() + "</td></tr>";
  result += "<tr><td colspan='2'>You earned " + this.getTotalFrequentRenterPoints() + " frequent renter points</td></tr>";
  result += "</table>";
  return result;
};

module.exports = Customer;
