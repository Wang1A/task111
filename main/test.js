// JavaScript Document
module.exports=function beersong(number){
	if(number===1){
		return "1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.";
	}
	if(number>=1 && number <=99){
		let result=number+" bottles of beer on the wall, "+number+" bottles of beer.Take one down and pass it around, "+(number-1)+" bottle of beer on the wall.";
		return result;
	}
	if(number===0){
		let result="No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall."
		return result;
	}
};