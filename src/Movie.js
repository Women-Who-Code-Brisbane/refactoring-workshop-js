const Price = require("./Price");

function Movie (title, priceCode) {
  this._title = title;
  this.setPriceCode(priceCode);
}

Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;
Movie.CHILDRENS = 2;

Movie.prototype.getPriceCode = function () {
  return this._price.getPriceCode();
};

Movie.prototype.setPriceCode = function (arg) {
  switch (arg) {
    case Movie.REGULAR:
      this._price = Price.regularPrice();
      break;
    case Movie.NEW_RELEASE:
      this._price = Price.newReleasePrice();
      break;
    case Movie.CHILDRENS:
      this._price = Price.childrensPrice();
      break;
    default:
      throw("invalid price code");
  }
};

Movie.prototype.getTitle = function () {
  return this._title;
};

Movie.prototype.getCharge = function (daysRented) {
  var result = 0;
  switch (this.getPriceCode()) {
    case Movie.REGULAR:
      result += 2;
      if (daysRented > 2)
        result += (daysRented - 2) * 1.5;
      break;
    case Movie.NEW_RELEASE:
      result += daysRented * 3;
      break;
    case Movie.CHILDRENS:
      result += 1.5;
      if (daysRented > 3)
        result += (daysRented - 3) * 1.5;
      break;
  }
  return result;
};

Movie.prototype.getFrequentRenterPoints = function (daysRented) {
  if ((this.getPriceCode() == Movie.NEW_RELEASE) && daysRented > 1) {
    return 2;
  } else {
    return 1;
  }
};
module.exports = Movie;
