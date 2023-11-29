console.log('hello javascript,from external javascript...')
document.write("from javascript");


var a;
a=99;
console.log("a:",a);


//datatypes
var str="this is a string";
console.log("str:",str);
console.log(typeof(str));

var num=25;
console.log("num:",num);
console.log(typeof(num));

var bool1=true;
console.log("bool1:",bool1);
console.log(typeof(bool1));

var i = undefined;
console.log("i:",i);
console.log(typeof(i));

var n = null;
console.log("n:",n);
console.log(typeof(n));

//global object

console.log(window);
var bike ="hero honda";
window.console.log("bike:",bike);

//variable scope

//var
/*
 -add to global object
 -function scoped
 -can be redeclared and modified at any time
 */

 {
 var car="benz";
 console.log("car:",car);
 console.log("window.car:",window.car);
 var car;
 var car="g-wagon";
 console.log("car:",car);
 }
 console.log("car from outside the block:",car);

 //let
 /*
 -does not add to global object
 -block scoped
 -can't redeclare
 -can update value later
 -declaration and initialization
*/

{
    let fruit = "apple";
    console.log("fruit:",fruit);
    console.log("window.fruit:",window.fruit);

    //let fruit; //not possible, cannot redeclare

    fruit ="banana";
    console.log("fruit:",fruit);

    let food;
    food="rice";
}

//console.log("fruit from outside the block:",fruit); //gives error(fruit is not defined)

//const
/*
 -does not add to global block
 -block scoped
 -cannot redeclare
 -cannot update later
 -declaration and initialization must be done in single line;
 */

 {
    const place = "new york";
    console.log("place:",place);
    console.log("window.place:",place);
    //const place; //cannot redeclare, gives error

    //place="mumbai"; //not possible to constant variable

    //const country; //missing initialization and declaration
 }

 //console.log("place from outside the block:",place);  //gives error (place is not defined)


 {
    let str = "hello,world";
    let length = str.length;
    console.log("length:",length);

    let toUpperCase =str.toUpperCase();
    console.log("toUpperCase:",toUpperCase);

    let toLowerCase =str.toLowerCase();
    console.log("toLowerCase:",toLowerCase);

    let length1 =str.toUpperCase().toLowerCase().length;
    console.log("length1:",length1);

    let trimmedString =str.trim();
    console.log("trimmedString:",trimmedString);
    let trimmedStringLength =trimmedString.length;
    console.log("trimmedStringthLength:",trimmedStringLength);

    let leftTrimmedString = str.trimStart();
    let leftTrimmedStringLength = leftTrimmedString.length;
    console.log("leftTrimmedString:",leftTrimmedString);
    console.log("leftTrimmedStringlength:",leftTrimmedStringLength);

    let rightTrimmedString = str.trimEnd();
    let rightTrimmedStringLength = rightTrimmedString.length;
    console.log("rightTrimmedString:",rightTrimmedString);
    console.log("rightTrimmedStringlength:",rightTrimmedStringLength);

    let subString = str.substring(2,5);
    console.log("subString:",subString);

    let replacedString = str.replace("hello","yo");
    console.log("replacedString:",replacedString);

    let isStartsWith = str.startsWith("hello");
    console.log("isStartsWith:",isStartsWith);

    let isEndsWith = str.endsWith("world");
    console.log("isEndsWith:",isEndsWith);

    let splitString = str.split(',');
    console.log("splitString:",splitString);

    let joinedArray = splitString.join(' ');
    console.log("joinedArray:",joinedArray);

    let text = "Apple, Banana, Kiwi";
    let part = text.slice(-12);
    console.log("part:",part);

    let text1 = "Luffy,Ace,Sabo"
    let part1 = text1.slice(5);
    console.log("part1:",part1);

    


 }


{

   let arr = [10,20,30,40,50];
   console.log("arr[2]:",arr[2]);

   console.log("index of :",arr.indexOf(40));

   arr.push("end");   //adds element at the end of an array
   console.log("push:",arr);

   arr.unshift("start");      //adds element at the start of an array
   console.log("unshift:",arr);

   arr.pop();               //removes the last element of an array
   console.log("pop:",arr);

   arr.shift();           //removes first element of an array
   console.log("shift:",arr);

   arr.splice(2,2);           //(start index,elements to be spliced)
   console.log("splice:",arr);

   arr.splice(2,0,24,42);      //add elements to the 2nd index of an array
   console.log("splice:",arr);

   arr[0]=100;             //reassign the 0th index in the array
   console.log("splice:",arr);
}


{
   //OBJECTS

   let obj = {
      firstName :"Roronoa",
      lastName :"Zoro",
      Age: 23,
      Japanese: "true",
      mark:[50,75],
      address:{
         city:"tokyo",
         street:"kochi",
         country:"japan",
      }

   }

   console.log("obj:",obj);
   // console.log("firstName:",obj.firstName);
   // console.log("japanese:",obj.Japanese);
   // console.log("age:",obj.Age);

   // obj.firstName="vinsmoke";
   // console.log("firstname:",obj.firstName);

   // obj.lastName="sanji";
   // console.log("lastname:",obj.lastName);


}



