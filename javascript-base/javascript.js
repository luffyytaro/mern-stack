console.log('hello javascript,from external javascript...')
// document.write("from javascript");


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

{
   let arr =[20,30,10,50,45];
   let sum =0;

   for(let i=0;i<arr.length;i++) {
      //i=0 -> sum = sum + arr[i] ->sum = 0 + arr[0] ->sum 0 + 10 =10
      //....
      //.....


      sum = sum +arr[i];
   }
   console.log("sum:",sum);


let avg = sum/arr.length;
console.log("avg:",avg);


//TO FIND THE MINIMUM NUMBER

   let min = arr[0];
   for( i=0;i<=arr.length;i++) {
      if(arr[i]< min){
         min =arr[i];
      }
   }
   console.log("minimum:",min);


   //TO FIND THE MAXIMUM NUMBER

   let max = arr[0];
   for( i=0;i<=arr.length;i++) {
      if(arr[i] > max){
         max =arr[i];
      }
   }
   console.log("maximum:",max);


   //to change negative elements in an array into positive

   let arr1 = [-2,-5,-4,-1];

   for (let i=0;i<arr.length;i++) {
      if (arr1[i] < 0){
         arr1[i] = arr1[i]*-1;
      }
   }
   console.log("negative to positive:",arr1);


   //program to reverse a string
   let str ="Aswin";
   let reverse ='';
   for(let i=str.length-1;i>=0;i--) {

      //i=5-1 -> i=4 ->reverse = reverse + str[i] -> reverse= '' + str[4] -> reverse ''+'o' o;
      reverse = reverse + str[i];
   }
   console.log("reverse string:",reverse);
}

{
   //find the lowercases and convert them into uppercase
   let arr = ['a','b','C','d','X','z'];
   let uppercase=[];
   let lowercase=[];

   for(let i=0;i<arr.length;i++) {
      uppercase[i]=arr[i].toUpperCase();
      lowercase[i]=arr[i].toLowerCase();
   }


   console.log("upper:",uppercase);
   console.log("lower:",lowercase);
}

{
   // //Multipication table using nested loops

   for(let i=1; i<=10; i++) {
      console.log('\n');

      for(j=1; j<=10; j++){
         console.log(`${i} * ${j} = ${i*j}`)
      }
   }

   let string ='';
   let string1 ='';
   //string = '*\n**\n***\n'

   for(let i=1;i<=10;i++){
      for(let j=1;j<=i;j++){
         string = string +'*';
         string1 = string1 +'*';
      }
      
      string = string +'\n';
      string1 = string1 + '<br>';
   }
   console.log(string);
   

}

{
//functions

//function definition
function printHello(){
   console.log("hello world");
}
printHello();

//Named function
function getAge(){
   return 22;
}

let age = getAge();
console.log("getAge:",age);

//Anonymous function
let getName = function() {
   console.log("get name function called");
   return "Luffy";
}
let name = getName();
console.log("name:",name);

//Arrow function

let getMarks =() => {
   console.log("arrow function called");
   return 100;
}

let mark = getMarks ();
console.log("mark:",mark);





//FUNCTIONS WITH PARAMETERS
//calling previous mathematical problems in function 

function greeting(message,message1) {
   console.log("message:",message);
   console.log("message1:",message1);
}
greeting("Pirate","KING");

//calling sum  in function parameter
function sum(){
   let sum =0;
for (let i=1; i<=10;i++) {

   sum= sum + i;
}
console.log("sum:",sum);

}
sum();

//calling fibonacci  in function parameter
function fibonacci(){
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
fibonacci();

//calling factorial  in function parameter
function factorial(num){
   let fact =1;


for (let i=num;i>0;i--) {
   fact = fact * i;
}
console.log("factorial:",fact);
}
factorial(7);


//Array in function

function array(arr){
   
   let sum =0;

   for(let i=0;i<arr.length;i++) {
      //i=0 -> sum = sum + arr[i] ->sum = 0 + arr[0] ->sum 0 + 10 =10
      //....
      //.....


      sum = sum +arr[i];
   }
   console.log("sum:",sum); 
}
let arr =[25,30,10,50,45];
array(arr);


//calling functon in Reverse string
function reverse(str){
  
   let reverse ='';
   for(let i=str.length-1;i>=0;i--) {

      //i=5-1 -> i=4 ->reverse = reverse + str[i] -> reverse= '' + str[4] -> reverse ''+'o' o;
      reverse = reverse + str[i];
   }
   console.log("reverse string:",reverse);
}
let str ="Aswin";
reverse(str);


//calling the count of vowels in a string
//   function vowels(str1){
   
//    let count = str1.match([aswin]).length;


// for(let i=0;i<=vowels;i++) {

//    result = vowels(string);
// }
// console.log("count:",vowels);

//   }
//   let str1 =["aswin"];
//   vowels(str1);




}



//print array of repeating elements 
{
   function array(arr){
      let arr1 =[];

   for(let i=0;i<arr.length;i++){
      for(let k =i+1;k<=arr.length;k++){
         if(arr[i]==arr[k]){
            arr1[i]=arr[i];
         }
      }
      
   }
   console.log(arr1);
}
let arr =[5,6,5,6,7,4,5];
array(arr); 
}


{
   console.log("\n\n");

   function update(a) {
      a="new value";
      console.log("from update function a:",a);
   }

   function updateArr(arr) {
      arr[2]= "new value";
   }

   function updateObj(obj) {
      obj.name ="Law";
   }

   let a=7;
   let arr = [1,5,1,5];
   let obj = {name : "Trafalgar", age : 21};

   
   //call by value
   console.log("a before :",a);
   update(a);
   console.log("a after update:",a);

   //call by reference
   console.log("arr before update:",arr);
   updateArr(arr);
   console.log("array after update :",arr);

   //call by reference
   console.log("obj before update:", obj);
   updateObj(obj);
   console.log("obj after update:",obj);


   //Closure
   //A function along with its environment
   function outerFunction() {
      let greeting = "I'm gonna be KING of THE PIRATES";

      function innerFunction (){

         function innerFunction1(){

            console.log(greeting);
         }
         return innerFunction1;
      }
      return innerFunction;
   }

   let result = outerFunction();
   console.log("result:",result);


   let result1 = result();
   console.log("result1:",result1);
   result1();

   // let innerFun = function innerFunction(){
   //    console.log(greeting);
   // }
   // console.log("innerFun:",innerFun);

   // // innerFun();



   //Methods of DOM

   let btn = document.getElementById("btn");
   console.log("btn:",btn);
   console.log("button content:",btn.textContent); //textContent or innerHTML
   
   let container = document.getElementsByClassName("container");
   console.log("container:",container);

   console.log("container1:",container[0]);
   console.log("container1 content :",container[0].textContent);
   console.log("container2:",container[1]);
   console.log("container3:",container[2]);

   let para = document.getElementsByTagName("p");
   console.log("para:",para);

   console.log("paragarph1:",para[0]);
   console.log("paragraph1 content:",para[0].textContent);
   console.log("paragarph2:",para[1]);
   console.log("paragarph3:",para[2]);

   // let listItems = document.querySelector(".container #box ul li");
   // console.log("listItems:",listItems);
   // console.log("listItems content:",listItems.textContent);
   // console.log("listItems innerHTML:",listItems.innerHTML);


   // let btn1 = document.getElementById("btn1");
   // btn1.innerHTML = "CLICK ME";

}


{
   console.log("\n\n\n");
   //EVENT LISTERNERS

   let btn =document.getElementById('btn');
   console.log("btn:",btn);

   let inp =document.getElementById('inp');
   console.log("inp:",inp);

   btn.addEventListener('click', function(){
      alert("Button Clicked");
   });

   btn.addEventListener("mouseover", function(){
      console.log("mouseover event fired....");
   });

   btn.addEventListener("mouseout", function(){
      console.log("mouseout event fired...");
   });

   btn.addEventListener("mousedown",function(){
      console.log("mousedown event fired..");
   });

   btn.addEventListener("mouseup",function(){
      console.log("mouseup event fired...");
   });

   btn.addEventListener("mousemove",function(){
      console.log("mousemove event fired...");
   });

   inp.addEventListener("keydown",function(){
      console.log("keydown event fired..");
   });

   inp.addEventListener("keyup",function(){
      console.log("keyup event fired..");
   });


   console.log("\n\n");
   //MATH FUNCTIONS
   console.log("Math.sqrt(64):",Math.sqrt(64));//8
   console.log("Math.round(9.9):",Math.round(9.9));//10
   console.log("Math.round(9.1):",Math.round(9.1));//9
   console.log("Math.ceil(10.6):",Math.ceil(10.6));//11
   console.log("Math.floor(10.7):",Math.floor(10.7));//10
   console.log("Math.abs(-6):",Math.abs(-6));//6
   console.log("Math.abs(6):",Math.abs(6));//6
   console.log("Math.PI:",Math.PI);//3.14
   console.log("Math.max(66,77,54):",Math.max(66,77,54));//77
   console.log("Math.min(33,44,22,33):",Math.min(33,44,22,33));//22
   console.log("Math.pow(3,4):",Math.pow(3,4));//81



   //TIMER
   // setTimeout(function(){
   //    alert("set")
   //    console.log("from setTimeOut...");
   // },2000);

   // setInterval(function(){
   //    console.log("from setInterval...");
   // },3000);

   //CALLBACK
   function printHello(callback) {
      console.log("callback:",callback);
      callback();
      console.log("hello..");
   }

   let callback = function() {
      console.log("callback function...");
   };
   printHello(callback);  

}

{
   //PROGRAM TO PRINT CURRENT TIME

   // function putZero(value) {
   //    return value<10?"0"+value:value;
   // }

   // function show() {
   //    var time = document.getElementById("time");
   //    console.log("time:",time);
   //    var dt = new Date();
   //    console.log("date:",dt);
   //    var hours = dt.getHours();
   //    var minutes = dt.getMinutes();
   //    var seconds = dt.getSeconds();
   //    //if(hours >12) {
   //       //return "pm"
   //       //
   //    //}else {
   //       //return "am"
   //    //}
   //    var ampm = hours>12?"pm":"am";
   //    time.innerHTML = putZero(hours%12) + ":" + putZero(minutes) + ":" + putZero(seconds) + ampm;

   //    setTimeout(function(){
   //       show();
   //    },1000);
   // }
   // show();
}


{
   //SPREAD OPERATOR

   let arr = [1,2,3,4,5];
   console.log("arr:",arr);

   let arr_cont = [...arr,6,7];
   console.log("arr_cont:",arr_cont);


   let obj = {
      firstName : "mike",
      lastName  : "curry"
   }
   console.log("obj:",obj);

   let obj_cont = {
      ...obj,
      age: 40
   }
   console.log("obj_cont:",obj_cont);
}

{
   //DESTRUCTURE
   let arr = [1,2,3,4,5];
   console.log("arr:",arr);

   let [a,s,w,i,n] = arr;
   console.log("a:",a);
   console.log("s:",s);
   console.log("w:",w);
   console.log("i:",i);
   console.log("n:",n);
}

{
   //NESTED DESTRUCTURE

   let matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
   ];
   console.log("matrix:",matrix);

   let [row1,row2,row3] = matrix;
   console.log("row1:",row1);
   console.log("row2:",row2);
   console.log("row3:",row3);

   let [a,b,c] = row1;
   let [d,e,f] = row2;
   let [g,h,i] = row3;

   console.log("a:",a);
   console.log("b:",b);
   console.log("c:",c);
   console.log("d:",d);
   console.log("e:",e);
   console.log("a:",a);
   console.log("a:",a);




   let obj = {
      firstName: "miyamoto",
      lastName: "mushashi",
      age: 22,
      address: {
         street: "kyoto",
         city: "tokyo",
         pincode: 2233,
      }
   }
   console.log("obj:",obj);


   let {firstName, lastName, age, address: {street, city,pincode}} = obj;

   console.log("firstName:",firstName);
   console.log("lastName:",lastName);
   console.log("age:",age);
   console.log("street:",street);
   console.log("city:",city);
   console.log("pincode:",pincode);


}

{
   //example for spread operator
   let arr1 = [1,2,3,4,5];
   console.log("arr1:",arr1);

   let arr2 = [6,7,8,9,10];
   console.log("arr2:",arr2);
   
   let arr3 = [...arr1,...arr2]
   console.log("combined array:",arr3);



   let obj = {
      firstName: "aswin",
      lastName: "cs",
      age: 22,
      address: {
         street: "kyoto",
         city: "tokyo",
         pincode: 2233,
      }
   }
   console.log("obj:",obj);

   let obj1 = {
      ...obj,
      hobby: "playing",
      car: "skyline",
   }
   console.log("obj2:",obj1);

   let obj3 = {
      ...obj,
      ...obj1,
   }
   console.log("combined obj:",obj3);
}


{
   //ARRAY METHODS

   let arr = [
      {name : "aswin", mark : 100, place : "chalakudy"},
      {name : "arjun", mark : 98, place : "kochi"},
      {name : "anvar", mark : 99, place : "thrissur"},
      {name : "amith", mark : 99, place : "adoor"},
   ];
   
   //ForEach
   arr.forEach((element,index)=>{
      console.log("index:",index);
      console.log("elements:",element);
   })

   //FIND
   let findResult = arr.find((element)=>{
      return element.name =="aswin";
   });
   console.log("findResult:",findResult);

   //filter
   let filterResult = arr.filter((element,index)=>{
      return element.mark ==99;
   });
   console.log("filterResult:",filterResult);

   //MAP
   let mapResult = arr.map((element)=>{
      return element.name;
   });
   console.log("mapREsult:",mapResult);

   //reduce
   let totalMarks = arr.reduce((total,element)=>{
      return total + element.mark;
   },0);
   console.log("total marks:",totalMarks);
}

let person = {
   firstName : "aswin",
   lastName : "cs",
   age : 22,
   getAge : function () {
      console.log(`age of ${this.firstName} is ${this.age}`);
   }
}

person.getAge();

console.log("this:",this);

function greet(message1,message2) {
   console.log(`${message1} and ${message2} ${this.firstName}`);
}

// greet("hi");
// greet.call(person,"hi","hello");
// greet.apply(person,["hi","hello"]);

let bindedResult = greet.bind(person,"hi","ola");
console.log(bindedResult());

{
   //CONSTRUCTOR FUNCTION
   function person(name,age,mark) {
      this.name = name;
      this.age = age;
      this.mark = mark ;

      this.greeting = function() {
         console.log(`hai ${this.name}, your mark is ${this.mark}`);
      }
   }
   let person1 = new person("hari",19,50);
   console.log("person:",person1);
   person1.greeting();


   person.prototype.getAgeAndMark = function() {
      console.log(`hello ${this.name}, your age is ${this.age} and your mark is ${this.mark}`);
   }
   person1.getAgeAndMark();
}

{
   //CLASS

   class person {
      name;
      age;
      mark;

      constructor(name,age,mark) {
         this.name = name;
         this.age = age;
         this.mark = mark;
      }
      greeting() {
         console.log(`hai ${this.name}`);
      }
   }

   let person1 = new person ("john",22,49);
   console.log("person1:",person1);
   person1.greeting();

   let person2 = new person ("ajay",22,44);
   console.log("person2:",person2);
   person2.greeting();

   person.prototype.getAgeAndMark = function () {
      console.log(`hello ${this.name},your age is ${this.age} and your mark ${this.mark}`);
   }

   person1.getAgeAndMark();
   person2.getAgeAndMark();


   class Animal {
      name;

      constructor(name) {
         this.name = name;
      }

      printName() {
         console.log(`Animal is ${this.name}`);
      }
   }

   let myAnimal = new Animal("cheetah");
   console.log("myAnimal:",myAnimal);
   myAnimal.printName();


   //inheritence
   class Dog extends Animal {
      color;
      constructor(name,color) {
         super(name);//calls parent constructor
         this.color = color
      }

      printColor() {
         console.log(`color of ${this.name} is ${this.color}`)
      }

   }
   let myDog = new Dog("luffy","blue");
   console.log("myDog:",myDog);
   myDog.printName();
   myDog.printColor();
}