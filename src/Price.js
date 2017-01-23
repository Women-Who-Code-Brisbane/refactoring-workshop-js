const regularPrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.REGULAR;
    },
    getCharge: function(daysRented){
      var result = 2;
      if (daysRented > 2)
        result += (daysRented - 2) * 1.5;
      return result;
    }
  }
};
const newReleasePrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.NEW_RELEASE;
    },
    getCharge: function(daysRented) {
      return daysRented * 3;
    }
  }
};
const childrensPrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.CHILDRENS;
    },
    getCharge: function(daysRented){
      var result = 1.5;
      if (daysRented > 3)
        result += (daysRented - 3) * 1.5;
      return result;
    }
  }
};
module.exports = {
  regularPrice: regularPrice,
  newReleasePrice: newReleasePrice,
  childrensPrice: childrensPrice
};