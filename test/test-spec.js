// JavaScript Document
"use strict"
var beersong = require('../main/test');
var expect = require('chai').expect;

describe('print out the entire beer song', function() {
	
	it("returns the lyrics of the number 1",function(){
	   	let number=1;
		let result=beersong(number);
		expect(result).to.eql("1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
	   });
	it("returns the lyrics of number between 1 and 99",function(){
		let number=parseInt(Math.random()*(99-2+1)+2);//产生1-99的随机整数
		let result=beersong(number);
		let str=number+" bottles of beer on the wall, "+number+" bottles of beer.Take one down and pass it around, "+(number-1)+" bottle of beer on the wall.";
		expect(result).to.eql(str);
	});
	it("returns the lyrics of number 0",function(){
		let number=0;
		let result=beersong(number);
		expect(result).to.eql("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
	});
});