// var refers to variable //
var a =2;
var b =3;
var c =5;

/* increment and 
decrement operator */
a ++ ;
b -- ;
c ++ ;

// print process //
console.log(a+b+c);

/* Double qouted string
placine "\" before */
 
var myStr =" I am a \"Double quoted\" string inside \"double quotes\" ";

console.log(myStr);

/* Escape sequence --Because strings must be written within quotes, JavaScript will misunderstand this string that's why we have to use some notation;
\' -- Single quote
\" -- Double Quote
\\ -- backslash
\n -- new line
\r -- carrieage return
\t -- tab
\b -- backspace
\f -- form feed */

//Concatenation string with '+' operator //

var myStr=" Hello I'm  a "  ;
 myStr += " JS Learner "; // this mean " myStr = myStr + "JS Learner " //

console.log(myStr); 
 
 // or //
 
 var str1 ="How are you ? ";
 var str2 =" I am fine"
 
 console.log(str1 + str2);
 
 // another way of " + " using within the statement //
 
 var name = "Java Script ";
 
 var newStr= " Hello, I'm " + name + ", How are you ";
 
 console.log(newStr);
 
// Appending Variable to string //

var str = "Brenden Eich  ";
var sTr = " is the founder of JS " ;

str +=sTr ;
console.log(str); 
