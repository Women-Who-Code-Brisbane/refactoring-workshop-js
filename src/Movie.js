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

module.exports = Movie;
