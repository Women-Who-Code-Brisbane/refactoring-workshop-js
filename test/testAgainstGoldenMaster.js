var fs = require('fs');
var _ = require('lodash');
var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();

var Customer = require('../src/Customer');
var Movie = require('../src/Movie');
var Rental = require('../src/Rental');

var dataroot = './test/golden-master/data/';

describe('Alice', function () {
  var customer = new Customer('Alice');
  _.range(0, 10).forEach(function (n) {
    it('should receive the correct statement for ' + n + ' regular movies rented 1 day each', function () {
      var filename = dataroot + n + '-regular-movies-for-1-day.txt';
      var expected = fs.readFileSync(filename).toString();
      var actual = customer.statement();
      expect(actual).to.equal(expected);
      customer.addRental(new Rental(new Movie('A Regular Movie', Movie.REGULAR), 1));
    });
  })
});
describe('Bob', function () {
  var customer = new Customer('Bob');
  _.range(0, 10).forEach(function (n) {
    it('should receive the correct statement for ' + n + ' children movies rented 1 day each', function () {
      var filename = dataroot + n + '-children-movies-for-1-day.txt';
      var expected = fs.readFileSync(filename).toString();
      var actual = customer.statement();
      expect(actual).to.equal(expected);
      customer.addRental(new Rental(new Movie('A Children Movie', Movie.CHILDRENS), 1));
    });
  });
});

describe('Charlie', function () {
  var customer = new Customer('Charlie');
  _.range(0, 10).forEach(function (n) {
    it('should receive the correct statement for ' + n + ' new movies rented 1 day each', function () {
      var filename = dataroot + n + '-new-movies-for-1-day.txt';
      var expected = fs.readFileSync(filename).toString();
      var actual = customer.statement();
      expect(actual).to.equal(expected);
      customer.addRental(new Rental(new Movie('A New Movie', Movie.NEW_RELEASE), 1));
    });
  });
});
describe('Dom', function () {
  _.range(1, 10).forEach(function (n) {
    it('should receive the correct statement for 1 regular movie rented ' + n + ' days', function () {
      var customer = new Customer('Dom');
      customer.addRental(new Rental(new Movie('A Regular Movie', Movie.REGULAR), n));
      var filename = dataroot + '1-regular-movie-for-' + n + '-days.txt';
      var expected = fs.readFileSync(filename).toString();
      var actual = customer.statement();
      expect(actual).to.equal(expected);
    });
  });
});
describe('Erica', function () {
  _.range(1, 10).forEach(function (n) {
    it('should receive the correct statement for 1 children movie rented ' + n + ' days', function () {
      var customer = new Customer('Erica');
      customer.addRental(new Rental(new Movie('A Children Movie', Movie.CHILDRENS), n));
      var filename = dataroot + '1-children-movie-for-' + n + '-days.txt';
      var expected = fs.readFileSync(filename).toString();
      var actual = customer.statement();
      expect(actual).to.equal(expected);
    });
  });
});

describe('Frank', function () {
  _.range(1, 10).forEach(function (n) {
    it('should receive the correct statement for 1 new movie rented ' + n + ' days', function () {
      var customer = new Customer('Frank');
      customer.addRental(new Rental(new Movie('A New Movie', Movie.NEW_RELEASE), n));
      var filename = dataroot + '1-new-movie-for-' + n + '-days.txt';
      var expected = fs.readFileSync(filename).toString();
      var actual = customer.statement();
      expect(actual).to.equal(expected);
    });
  });
});
