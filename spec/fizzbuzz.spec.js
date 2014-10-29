'use strict';

describe('fizzbuzz', function() {

  it('returns Fizz if the number is divisible by 3', function() {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(21)).toEqual('Fizz');
  });

  it('returns Buzz if the number is divisible by 5', function(){
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(10)).toEqual('Buzz');
  });
  it('returns FizzBuzz if the number is divisible by 3 and 5', function(){
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(30)).toEqual('FizzBuzz');

  });

  it('returns the number if it is not divisible by 3 or 5', function(){
    expect(fizzbuzz(17)).toEqual(17);
    expect(fizzbuzz(19)).toEqual(19);
  });
});
