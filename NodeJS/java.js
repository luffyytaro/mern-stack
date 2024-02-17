
//200 -success response
//201 - created
//203 - non authorated 
//204 - no content
//301 - move permenantly
//304 - not modified
//307 & 307 - temporary and permenant redirect
//400 - bad request
//401 - unauthorized
//402 - payment req
//403 - forbidden
//404 - not found
//413 - payload to large
//414 - url to long
//429 - too many req
//500 - internal server error 
//501 - not implemented
//
// let a = 12;
// let b = 23;
// let c = a*b;
// console.log("hi welcome");
// console.log(c);
// console.log("hi i'm aswin");



// function isPalindrome(str) {
// 	let j = str.length - 1
// 	for (let i = 0; i < str.length / 2; i++) {
// 		if (str[i] != str[j]) {
// 			return false;
// 		}
// 		j--;
// 	}
// 	return true;
// }

// let str1 = "7";

// console.log(isPalindrome(str1));




// function isPalindrome(str) {
//     let rev = str.split("").reverse().join("");

//     if (rev ==str) {
//         return true
//     }
//     return false
// }

// result= isPalindrome("malayalam");
// if (result==true){
//     console.log("true palindrome");
// }
// else{
//     console.log("not palindrome");
// }


// let x = 12;

// let rev = Number(String(x).split("").reverse().join(""));
// console.log(rev);

// const isPalindrome = (num)=> Number(String(num).split("").reverse().join("")) ==num;

// console.log(isPalindrome(131));





// console.log(isPalindrome(str1));




// function isPalindrome(str) {
//     let rev = str.split("").reverse().join("");

//     if (rev ==str) {
//         return true
//     }
//     return false
// }

// result= isPalindrome("malayalam");
// if (result==true){
//     console.log("true palindrome");
// }
// else{
//     console.log("not palindrome");
// }


// let x = 12;const isPalindrome = (num)=> Number(String(num).split("").reverse().join("")) ==num;

// console.log(isPalindrome(131));









// let rev = Number(String(x).split("").reverse().join(""));
// console.log(rev);

// const isPalindrome = (num)=> Number(String(num).split("").reverse().join("")) ==num;
// const isPalindrome = (num)=> Number(String(num).split("").reverse().join("")) ==num;

// console.log(isPalindrome(131));




// const isPalindrome = (num)=> Number(String(num).split("").reverse().join("")) ==num;




// console.log(isPalindrome(131));




// const isPalindrome = (num)=> Number(String(num).split("").reverse().join("")) ==num;

// console.log(isPalindrome(131));



const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    console.log(req.url);
    switch(req.url){
        case "/home": {
            res.writeHead(200,{
                "Content-Type": "text/html"
            });
            fs.readFile("./index.html","utf-8",(error,data)=>{
                if(error){
                    res.write("error occured");
                }
                else{
                    res.write(data);
                }
                return res.end();
            });
        }
            
        break;
        case "/about":{


            res.writeHead(200,{
                "Content-Type": "text/html"
            });
            fs.readFile("./about.html","utf-8",(error,data)=>{
                if(error){
                    res.write("error occured");
                }
                else{
                    res.write(data);
                }
                return res.end();
            });
        }
        break;
        default:{
            res.write("page not found");
            return res.end();
        }
    }
    
});


server.listen(4000, error=>{
    if(error) return console.log(error);
    console.log("server started");
});



