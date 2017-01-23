const regularPrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.REGULAR;
    },
    getCharge: function (daysRented) {
      var result = 2;
      if (daysRented > 2)
        result += (daysRented - 2) * 1.5;
      return result;
    },
    getFrequentRenterPoints: function (daysRented) {
      return 1;
    }
  }
};
const newReleasePrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.NEW_RELEASE;
    },
    getCharge: function (daysRented) {
      return daysRented * 3;
    },
    getFrequentRenterPoints: function (daysRented) {
      return daysRented > 1 ? 2 : 1;
    }
  }
};
const childrensPrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.CHILDRENS;
    },
    getCharge: function (daysRented) {
      var result = 1.5;
      if (daysRented > 3)
        result += (daysRented - 3) * 1.5;
      return result;
    },
    getFrequentRenterPoints: function (daysRented) {
      return 1;
    }
  }
};
module.exports = {
  regularPrice: regularPrice,
  newReleasePrice: newReleasePrice,
  childrensPrice: childrensPrice
};