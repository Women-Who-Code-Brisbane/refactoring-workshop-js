const regularPrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.REGULAR;
    }
  }
};
const newReleasePrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.NEW_RELEASE;
    }
  }
};
const childrensPrice = function () {
  const Movie = require("./Movie");
  return {
    getPriceCode: function () {
      return Movie.CHILDRENS;
    }
  }
};
module.exports = {
  regularPrice: regularPrice,
  newReleasePrice: newReleasePrice,
  childrensPrice: childrensPrice
};