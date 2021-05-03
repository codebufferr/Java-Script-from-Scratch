/* Array - Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time,
and data can be stored at non-contiguous locations in the array, 
JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them.
----------------------------------------------
Storing Multiple items in array */

var arr = ["python" , 1981, "JS" ,23 ] // simple array //
var nestedarray =[["java" , 91],["CPP" , 65 ]];


 
// accres array with index value //

var arrayIndex = arr[0];
var arrayIn = nestedarray[0][1];//[0] refers to first element and [1] takes from [0]

console.log(arrayIndex); // simple array
console.log(arrayIn); //nested array 

//Modify Array with Index

var myArray =[ "rish" ,23 ,121 ,"js"];
myArray[1] = "shabh" ;// by using this method update string or int.

console.log(myArray);

//Access Multi-dimensional array //

var Marray = ["JS " , "python" ,["cpp","C"] ,[[1,3,4],[5,6,7]],["CS" ,"bte"]] ;
var newarr = Marray[3][0][1];//[3]-index [0]- index of array at [3], [1]-element 

console.log(newarr);

// length od array 

var arr = [1,2,3,4,5,31,321,314,23441,23,123];


console.log(arr.length);

//Push() - insert element at the end //

var arrPush =["Go" , "Corona "];

arrPush.push("Go");

console.log(arrPush);

//unshift() - insert element at 1st insdex
 
 
 var arr =[1,234,523,53,3];
 
 arr.unshift(40);
  console.log(arr);
  console.log(arr.length);
 
// pop() - emove last element of an array

var arr = ["risha",23,"sing",22];

arr.pop();

console.log(arr);

// shift()- remove 1st element of an array

var arr =[2,11,"Ris"];

arr.shift();

console.log(arr);

//-------Shopping Lis ---------------//

var Shoppinglist = [["Egg",10],["Bread", 2] ,["Milk ",2]];

console.log(Shoppinglist);

//------Remove Element from index --------------//

var arr = [ 1 , 3 , 4 , 6 , 9];
 arr.splice(0,2);//Splice() is used to remove element from index to given index //
 
 console.log(arr);
