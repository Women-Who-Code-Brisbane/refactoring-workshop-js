const Movie = require("./Movie");

function Rental (movie, daysRented) {
  this._movie = movie;
  this._daysRented = daysRented;
}

Rental.prototype.getDaysRented = function () {
  return this._daysRented;
};

Rental.prototype.getMovie = function () {
  return this._movie;
};

Rental.prototype.getCharge = function () {
  var result = 0;
  //determine amounts for rental line
  switch (this._movie.getPriceCode()) {
    case Movie.REGULAR:
      result += 2;
      if (this._daysRented > 2)
        result += (this._daysRented - 2) * 1.5;
      break;
    case Movie.NEW_RELEASE:
      result += this._daysRented * 3;
      break;
    case Movie.CHILDRENS:
      result += 1.5;
      if (this._daysRented > 3)
        result += (this._daysRented - 3) * 1.5;
      break;
  }
  return result;
}
module.exports = Rental;