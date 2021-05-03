// Length Of string //

var LengthofString = 0; // Camel Cases //
var str = "Length of the string including spaces." ;

LengthofString =str.length;

console.log(LengthofString); // op -38 //

// Find first character of string //

var FirstChar = " ";
var String = "JavaScript ";

FirstChar = String[1];

console.log(FirstChar); // you can directly find the charc by putting index value //

// String immutibility //

var str ="Wello Horld";
//str[0] = "H"; " you can not change a specific alphabet " //
str = "Hello world";

console.log(str);

// find character from the last //

var string1 ="JavaScript" ;
var lastChar = string1[string1.length - 1]; // you can put in any number  
var last= string1[string1.length - 3];
console.log(lastChar);
console.log(last); 

//blank words using function //

function Blankword(mynoun , myadj, myverb ,myadverb ){
    var result = " ";
     result += " The " + mynoun + " is " + myadj + " " +  myverb + " in the store " + myadverb ;
     return result
}

console.log(Blankword("dog" ,"big","ran","quickly")); // it will take input from function and pass it in to result //

