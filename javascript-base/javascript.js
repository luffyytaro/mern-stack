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

   

}


{
   let a=20;

   if (a==10) {
      console.log("success");
   }
   else if(a==15) {
      console.log("processing");
   }
   else if (a==20) {
      console.log("done!");
   }
   else {
      console.log("Fail");
   }


}

// {
//    let num=20;
//    let preIncrNum =++num;
//    console.log("preIncrNum:",num);

//    let postIncrNum =num++;
//    console.log("postIncrNum:",num);

//    let preDecrNum=--num;
//    console.log("preDecrNum:",num);

//    let postDecrNum=num--;
//    console.log("postDecrNum:",num);


// }


{
   //preIncrement
    let num1=10;
    let preIncrNum=++num1;
    console.log("preIncrNum:",preIncrNum);

    //postIncrement
    let num2=11;
    let postIncrNum=num2++;
    console.log("postIncrNum:",postIncrNum);

    //preDecrement
    let num3=12;
    let preDecrNum=--num3;
    console.log("preDecrNum:",preDecrNum);

    //postDecrement
    let num4=10;
    let postDecrNum=num4--;
    console.log("postDecrNum:",postDecrNum);



    let num6=10;
    let num7=10;

    if (num6 == num7) {
      console.log("both values are equal");
    }
    if (num6 === num7) {
      console.log("both value and their datatypes are equal");
    }
    if (num6!=10) {
      console.log("not 9");
    }


    let day=7;

    switch(day) {
      case 1:
         console.log("sunday");
         break;

      case 2:
         console.log("monday");
         break;
         
      case 3:
         console.log("tuesday");
         break;
         
      case 4:
         console.log("wednesday");
         break;
         
      case 5:
         console.log("thursday");
         break;
         
      case 6 :
         console.log("friday");
         break;
         
      case 7:
         console.log("saturday");
         break;   
    }

}

{
   //LOOPS
//for 
//while
//do-while

for (let i=0;i<10;i++) {
   console.log("hello world");
}

let i=0;
while (i<10) {
   console.log("hiii");
   i++;
}

let j=0;
do{
   console.log("welcome bjjs");
   j++;
}while(j<10)

for (let i=1;i<=10;i++) {
   if (i==3) {
   continue;
}

if (i==8) {
   break;
}

console.log(i);
}


//SUM

let sum =0;
for (let i=1; i<=10;i++) {

   sum= sum + i;
}
console.log("sum:",sum);


//PRODUCT

let product =1;
for (let i=1; i<=10;i++) {
   product = product*i;
}
console.log("product:",product);

let product1 =1;
let k=1;
while(k<=10) {
   product1 =product1 * k;
   k++;
}
console.log("product1:",product1);


//FACTORIAL

let fact =1;
let num =3;

for (let i=num;i>0;i--) {
   fact = fact * i;
}
console.log("factorial:",fact);


//FIBONACCI SERIES    (0 1 2 3 5 8 13.....)

console.log('FIBONACCI');

let sum1=0;
let limit=10;
let a=0;
let b=1;
let l=0;

while(l<=limit) {
   sum1=sum1+a;
   console.log(sum1);
   a=b;
   b=sum1;
   l++;
}
}

//SUM OF ODD AND EVEN NUMBERS

{
   //EVEN NUMBER

   let sum=0 ;
for(i=1;i<=10;i++)
{
  if(i%2==0)
  {
    sum=sum+i
  }
}
console.log("sum of even numbers:",sum);

//ODD NUMBER

let sum1=0;
for (i=1;i<=10;i++)
{
   if (i%2!=0)
   {
      sum1=sum1+i
   }
}
 console.log("sum of odd numbers:",sum1);

}



