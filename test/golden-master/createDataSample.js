var fs = require('fs');
var _ = require('lodash');

var Customer = require('../../src/Customer');
var Movie = require('../../src/Movie');
var Rental = require('../../src/Rental');

var customer = new Customer('Alice');
var dataroot = './data/';
_.range(0, 10).forEach(function (n) {
  var filename = dataroot + n + '-regular-movies-for-1-day.txt';
  fs.writeFileSync(filename, customer.statement());
  customer.addRental(new Rental(new Movie('A Regular Movie', Movie.REGULAR), 1));
});
var customer = new Customer('Bob');
_.range(0, 10).forEach(function (n) {
  var filename = dataroot + n + '-children-movies-for-1-day.txt';
  fs.writeFileSync(filename, customer.statement());
  customer.addRental(new Rental(new Movie('A Children Movie', Movie.CHILDRENS), 1));
});
var customer = new Customer('Charlie');
_.range(0, 10).forEach(function (n) {
  var filename = dataroot + n + '-new-movies-for-1-day.txt';
  fs.writeFileSync(filename, customer.statement());
  customer.addRental(new Rental(new Movie('A New Movie', Movie.NEW_RELEASE), 1));
});

_.range(1, 10).forEach(function (n) {
  var customer = new Customer('Dom');
  customer.addRental(new Rental(new Movie('A Regular Movie', Movie.REGULAR), n));
  var filename = dataroot + '1-regular-movie-for-' + n + '-days.txt';
  fs.writeFileSync(filename, customer.statement());
});
_.range(1, 10).forEach(function (n) {
  var customer = new Customer('Erica');
  customer.addRental(new Rental(new Movie('A Children Movie', Movie.CHILDRENS), n));
  var filename = dataroot + '1-children-movie-for-' + n + '-days.txt';
  fs.writeFileSync(filename, customer.statement());
});
_.range(1, 10).forEach(function (n) {
  var customer = new Customer('Frank');
  customer.addRental(new Rental(new Movie('A New Movie', Movie.NEW_RELEASE), n));
  var filename = dataroot + '1-new-movie-for-' + n + '-days.txt';
  fs.writeFileSync(filename, customer.statement());
});
