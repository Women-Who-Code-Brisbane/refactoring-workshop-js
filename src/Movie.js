function Movie (title, priceCode) {
  this._title = title;
  this._priceCode = priceCode;
}

Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;
Movie.CHILDRENS = 2;

Movie.prototype.getPriceCode = function () {
  return this._priceCode;
};

Movie.prototype.setPriceCode = function (arg) {
  this._priceCode = arg;
};

Movie.prototype.getTitle = function () {
  return this._title;
};

Movie.prototype.getCharge = function (daysRented) {
  var result = 0;
  //determine amounts for rental line
  switch (this._priceCode) {
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
  if ((this._priceCode == Movie.NEW_RELEASE) && daysRented > 1) {
    return 2;
  } else {
    return 1;
  }
};
module.exports = Movie;
