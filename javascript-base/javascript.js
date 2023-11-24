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

 //console.log("place from outside the block:",place);  //gives error (fruit is not defined)




