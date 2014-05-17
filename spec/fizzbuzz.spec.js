'use strict';

describe('fizzbuzz', function() {

  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = require('../lib/fizzbuzz');
  });

  it('returns Fizz if the number is divisible by 3', function() {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(21)).toEqual('Fizz');
    expect(fizzbuzz(24)).toEqual('Fizz');
    expect(fizzbuzz(27)).toEqual('Fizz');
    expect(fizzbuzz(33)).toEqual('Fizz');
    expect(fizzbuzz(51)).toEqual('Fizz');
    expect(fizzbuzz(54)).toEqual('Fizz');
    expect(fizzbuzz(57)).toEqual('Fizz');
    expect(fizzbuzz(63)).toEqual('Fizz');
    expect(fizzbuzz(96)).toEqual('Fizz');
    expect(fizzbuzz(99)).toEqual('Fizz');
  });

  it('returns Buzz if the number is divisible by 5', function(){
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(10)).toEqual('Buzz');
    expect(fizzbuzz(20)).toEqual('Buzz');
    expect(fizzbuzz(25)).toEqual('Buzz');
    expect(fizzbuzz(35)).toEqual('Buzz');
    expect(fizzbuzz(40)).toEqual('Buzz');
    expect(fizzbuzz(50)).toEqual('Buzz');
    expect(fizzbuzz(55)).toEqual('Buzz');
    expect(fizzbuzz(65)).toEqual('Buzz');
  });
  it('returns FizzBuzz if the number is divisible by 3 and 5', function(){
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(30)).toEqual('FizzBuzz');
    expect(fizzbuzz(45)).toEqual('FizzBuzz');
    expect(fizzbuzz(60)).toEqual('FizzBuzz');
    expect(fizzbuzz(75)).toEqual('FizzBuzz');
    expect(fizzbuzz(90)).toEqual('FizzBuzz');
  });

  it('returns the number if it is not divisible by 3 or 5', function(){
    expect(fizzbuzz(17)).toEqual(17);
    expect(fizzbuzz(19)).toEqual(19);
    expect(fizzbuzz(22)).toEqual(22);
    expect(fizzbuzz(23)).toEqual(23);
    expect(fizzbuzz(26)).toEqual(26);
    expect(fizzbuzz(28)).toEqual(28);
    expect(fizzbuzz(29)).toEqual(29);
    expect(fizzbuzz(31)).toEqual(31);
    expect(fizzbuzz(32)).toEqual(32);
    expect(fizzbuzz(34)).toEqual(34);
  });
});
