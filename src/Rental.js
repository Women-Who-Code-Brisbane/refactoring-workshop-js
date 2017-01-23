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
  return this._movie.getCharge(this._daysRented);
};

Rental.prototype.getFrequentRenterPoints = function () {
  return this._movie.getFrequentRenterPoints(this._daysRented);
};
module.exports = Rental;