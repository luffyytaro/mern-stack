import {Router} from "express";
import fs from "fs";

import { getData,postData } from "./request-handlers/test.handler.js";

import {signup,signin} from "./request for new/new-test.handler.js"

const router = Router();


router.route("/signup").post(signup);
router.route("/signin").post(mw,signin);

// router.route("/").get((req,res) =>{
//     let x = Math.floor(Math.random()*100);
//     fs.readFile("./numbers.json","utf-8", (error,data) =>{
//         let numbers = data ?JSON.parse(data) :[];
//         numbers.push(x);
//         fs.writeFile("./numbers.json",JSON.stringify(numbers),() =>{
//             res.json(x);
//         })
//     })
// });




// router.route("/2").get(mw,(req,res) => res.send("authorized"));
router.route("/get-data").get(getData);
router.route("/post-data").post(postData);

export default router;

function mw(req,res,next) {
    let {username, password} = req.body;
    fs.readFile("./logins.json","utf-8",  (error,data)=>{
        let numbers = data? JSON.parse(data) :[];
        let user = numbers.find(val=>val.username===username);
        if(user && user.password===password) {
            return next();
        }
        res.status(401).send("unauthorized access");
    })
}





// function mw(req, res, next){
//     let {id} = req.query;
//     fs.readFile("./numbers.json","utf-8", (error,data) =>{
//         let numbers = data? JSON.parse(data) :[];
//         if (numbers.includes(Number(id))) {
//             return next();
//         }
//         res.send("unauthorized access")
//     })
// }



// router.route("/").get((req,res) => {
//     let x = math.floor(math.random()*100);
//     res.send(x);
// });


// router.route("/3").get(mw,(req,res)=> res.send("response from router"));
// function mw(req, res, next){
//     let {id} = req.query;
//     if(id%2 ==0) {
//         return next();
//     }
//     res.send("response from middle ware");
//     }