var characters = "abcdefghijklmnopqrstuvwxyz1234567890";  //characters allowed 
var base = characters.length; //length

//converter

function encode(number){
	var leftover = number % base;
	number = Math.floor(number / base);
	encoded = characters[leftover].toString() + encoded;

}

return encoded; //returns function